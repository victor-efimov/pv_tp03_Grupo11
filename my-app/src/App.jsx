import { Routes, Route, Navigate } from "react-router-dom";

import Listaproyectos from './components/Listaproyectos.jsx';
import BarraNavegacion from './components/BarraNavegacion.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import DetalleProyecto from './components/DetalleProyecto.jsx';

import Dashboard from './views/Dashboard.jsx';
import PerfilUsuario from './views/PerfilUsuario.jsx';

function App() {

  return (

    <div>

      <BarraNavegacion />

      <Header />

      <Routes>

        <Route
          path="/"
          element={<Navigate to="/dashboard" />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/proyectos"
          element={<Listaproyectos />}
        />

        <Route
          path="/proyectos/:id"
          element={<DetalleProyecto />}
        />

        <Route
          path="/perfil"
          element={<PerfilUsuario />}
        />

      </Routes>

      <Footer />

    </div>

  );

}

export default App;