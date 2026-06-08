import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import "../css/Header.css";

const Header = () => {
  const { usuario } = useContext(UsuarioContext);

  return (
    <header>
      <div>
        <h1>Gestión de Proyectos Educativos</h1>
        <p>Trabajo desarrollado con React</p>
      </div>

      <div className="usuario-info">
        <strong>{usuario.nombre}</strong>
        <p>{usuario.rol}</p>
      </div>
    </header>
  );
};

export default Header;