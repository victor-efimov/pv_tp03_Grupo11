import React from 'react';
import { NavLink } from "react-router-dom";
import '../css/BarraNavegacion.css';

const BarraNavegacion = () => {
    return (
        <nav>
            <ul className="nav">
                <li><NavLink to="/dashboard">Inicio</NavLink></li>
                <li><NavLink to="/proyectos">Proyectos</NavLink></li>
                <li><NavLink to="/perfil">Perfil</NavLink></li>
            </ul>
        </nav>
    );
};
export default BarraNavegacion;