import { Navigate } from "react-router-dom";

import Listaproyectos from '../components/Listaproyectos.jsx';
import DetalleProyecto from '../components/DetalleProyecto.jsx';
import Dashboard from '../views/Dashboard.jsx';
import PerfilUsuario from '../views/PerfilUsuario.jsx';

const routes = [
  { path: '/', element: <Navigate to="/dashboard" replace /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/proyectos', element: <Listaproyectos /> },
  { path: '/proyectos/:id', element: <DetalleProyecto /> },
  { path: '/perfil', element: <PerfilUsuario /> },
  { path: '*', element: <Navigate to="/dashboard" replace /> }
];

export default routes;
