import React from 'react';
import { NavLink } from "react-router-dom";
import '../css/BarraNavegacion.css';

const BarraNavegacion = () => {
    return (
        <nav>
            <ul className="nav">
                <li><NavLink href="#">Inicio</NavLink></li>
                <li><NavLink href="#">Detalle</NavLink></li>
                <li><NavLink href="#">Proyectos</NavLink></li>
                <li><NavLink href="#">Consejos</NavLink></li>
                <li><NavLink href="#">Perfil</NavLink></li>
            </ul>
        </nav>
    );
};
export default BarraNavegacion;