import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <main style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "3rem", color: "#ff4d4d" }}>Error 404</h1>
      <h2>¡Ups! Página no encontrada</h2>
      <p>La ruta a la que intentás acceder no existe o fue modificada.</p>
      <div style={{ marginTop: "30px" }}>
        <Link to="/proyectos" style={{ color: "#007bff", textDecoration: "underline", fontWeight: "bold" }}>
          Volver a la lista de proyectos
        </Link>
      </div>
    </main>
  );
};

export default Error404;