import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import "../css/Header.css";

const Header = () => {
  const { usuario, logout } = useContext(UsuarioContext);

  return (
    <header>
      <div>
        <h1>Gestión de Proyectos Educativos</h1>
        <p>Trabajo desarrollado con React</p>
      </div>

      <div className="usuario-info">
        <strong>{usuario ? usuario.nombre : "Invitado"}</strong>
        <p>{usuario ? usuario.rol : "No autenticado"}</p>
        {usuario && (
          <button type="button" className="logout-button" onClick={logout}>
            Cerrar sesión
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;