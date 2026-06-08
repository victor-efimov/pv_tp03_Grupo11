import { Navigate } from "react-router-dom";

import Dashboard from "../views/Dashboard.jsx";
import PerfilUsuario from "../views/PerfilUsuario.jsx";
import Listaproyectos from "../components/Listaproyectos.jsx";
import DetalleProyecto from "../components/DetalleProyecto.jsx";
import Error404 from "../components/Error404.jsx";
import RutaProtegida from "../components/RutasProtejidas.jsx";

const routes = [
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/proyectos",
    element: (
      <RutaProtegida>
        <Listaproyectos />
      </RutaProtegida>
    )
  },
  {
    path: "/proyectos/:id",
    element: (
      <RutaProtegida>
        <DetalleProyecto />
      </RutaProtegida>
    )
  },
  {
    path: "/perfil",
    element: (
      <RutaProtegida>
        <PerfilUsuario />
      </RutaProtegida>
    )
  },
  {
    path: "*",
    element: <Error404 />
  }
];

export default routes;