import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UsuarioContext } from "../context/UsuarioContext";

const RutaProtegida = ({ children }) => {
  const { usuario } = useContext(UsuarioContext);

  if (!usuario) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default RutaProtegida;