import React from 'react';
const BarraNavegacion = () => {
    return (
        <nav style={{ background: '#333', padding: '10px', marginBottom: '20px' }}>
            <ul style={{ display: 'flex', gap: '15px', listStyle: 'none', color: 'white' }}>
                <li><a href="#" style={{ color: 'white' }}>inicio</a></li>
                <li><a href="#" style={{ color: 'white' }}>proyectos</a></li>
                <li><a href="#" style={{ color: 'white' }}>contacto</a></li>
            </ul>
        </nav>
    );
};
export default BarraNavegacion;