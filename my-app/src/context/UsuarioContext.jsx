import { createContext, useState, useEffect } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    const usuarioGuardado = localStorage.getItem("usuario_tp");
    return usuarioGuardado 
      ? JSON.parse(usuarioGuardado) 
      : {
          nombre: "Nicoo",
          dni: "12345678",
          rol: "Alumno",
          institucion: "UNJu"
        };
  });

  useEffect(() => {
    localStorage.setItem("usuario_tp", JSON.stringify(usuario));
  }, [usuario]);

  const actualizarPerfil = (nuevosDatos) => {
    setUsuario(nuevosDatos);
  };

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};