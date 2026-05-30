import { useState, useEffect, useRef } from "react";
import proyectoService from "../services/proyectoservices.js";
import ProyectoCard from "./ProyectoCard";
import DetalleProyecto from "./DetalleProyecto";
import RegistroActividad from "./RegistroActividad";
import FormularioProyecto from "./FormularioProyecto.jsx";
import '../css/Listaproyectos.css'; 

const Listaproyectos = () => {

const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
const [busqueda, setBusqueda] = useState("");
const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
const [ultimaModificacion, setUltimaModificacion] = useState(null);
const primeraCarga = useRef(true);

useEffect(() => {
    if (primeraCarga.current) {
        primeraCarga.current = false;
        return;
    }
    setUltimaModificacion(new Date());
}, [proyectos]);

const agregarProyecto = (proyectoAAgregar) => {

    const nuevaLista = proyectoService.agregarProyecto(proyectoAAgregar);

    setProyectos(nuevaLista);
};

const handleEliminar = (id) => {
        console.log('Eliminando proyecto con id:', id);
        const nuevaLista = proyectoService.eliminarProyecto(id);
        console.log('Nueva lista:', nuevaLista);
        setProyectos(nuevaLista);
       };

const handleVerDetalle = (proyecto) => {
    setProyectoSeleccionado(proyecto);
};

const handleCerrarDetalle = () => {
    setProyectoSeleccionado(null);
};

const handleBuscar = (e) => {
        setBusqueda(e.target.value);
};

const proyectosFiltrados = proyectos.filter(proyecto => 
    proyecto.titulo.toLowerCase().includes(busqueda.toLowerCase())
);

    return (
        <main>

        <div className="novedades">
        <h3>BUSCAR PROYECTOS</h3>
                <input
                    type="text"
                    value={busqueda}
                    onChange={handleBuscar}
                    placeholder="Buscar por título..."
                />
        </div>
        <FormularioProyecto agregarProyecto={agregarProyecto} />

        <div className="bienvenida">
            <h3>LISTA DE PROYECTOS</h3>
            {proyectosFiltrados.length === 0 ? (<p>No hay proyectos disponibles.</p>) : (
                proyectosFiltrados.map((proyecto) => (
                <ProyectoCard
                key={proyecto.id}
                proyecto={proyecto}
                onEliminar={handleEliminar}
                onVerDetalle={handleVerDetalle}/>
                ))
            )}
            {proyectoSeleccionado && (
                <DetalleProyecto 
                proyecto={proyectoSeleccionado}
                cerrar={handleCerrarDetalle}/>
            )}
           {ultimaModificacion && (
        <RegistroActividad fechaHora={ultimaModificacion} />
        )}
        </div>
        </main>
);
};

export default Listaproyectos;