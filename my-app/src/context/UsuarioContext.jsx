import { createContext, useState, useEffect } from "react";
import usuarioService from "../services/usuarioService";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    const usuarioGuardado = localStorage.getItem("usuario_tp");
    return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
  });

  useEffect(() => {
    if (usuario) {
      localStorage.setItem("usuario_tp", JSON.stringify(usuario));
    } else {
      localStorage.removeItem("usuario_tp");
    }
  }, [usuario]);

  const login = (dni, contraseña) => {
    const usuarioEncontrado = usuarioService.autenticarUsuario(dni, contraseña);
    if (!usuarioEncontrado) {
      return false;
    }

    const usuarioActivo = {
      id: usuarioEncontrado.id,
      nombre: usuarioEncontrado.nombre,
      rol: usuarioEncontrado.rol,
      institucion: usuarioEncontrado.institucion,
      email: usuarioEncontrado.email,
      dni: usuarioEncontrado.dni,
    };

    setUsuario(usuarioActivo);
    return true;
  };

  const logout = () => {
    setUsuario(null);
  };

  const actualizarPerfil = (nuevosDatos) => {
    setUsuario((actual) => ({ ...actual, ...nuevosDatos }));
  };

  return (
    <UsuarioContext.Provider value={{ usuario, login, logout, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};