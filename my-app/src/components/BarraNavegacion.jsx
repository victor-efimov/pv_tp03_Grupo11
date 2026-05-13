import React from 'react';
import '../css/BarraNavegacion.css';

const BarraNavegacion = () => {
    return (
        <nav>
            <ul class="nav">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Detalle</a></li>
                <li><a href="#">Proyectos</a></li>
                <li><a href="#">Consejos</a></li>
                <li><a href="#">Perfil</a></li>
            </ul>
        </nav>
    );
};
export default BarraNavegacion;