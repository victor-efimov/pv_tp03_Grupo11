import { useState } from "react";
import proyectoService from "../services/proyectoservices.js";
import ProyectoCard from "./ProyectoCard";
import DetalleProyecto from "./DetalleProyecto";
import '../css/Listaproyectos.css'; 

const Listaproyectos = () => {

const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
const [busqueda, setBusqueda] = useState("");
const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

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
        const texto = e.target.value;
        setBusqueda(texto);
        if (texto.trim() === "") {
            setProyectos(proyectoService.obtenerProyectos());
        } else {
            setProyectos(proyectoService.buscarProyecto(texto));
        }
    };
const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: "",
    categoria: "",
    estado: false,
    descripcion1: "",
    descripcion2: "",
    recursoPDF: "",
    recursoDrive: "",
    recursoGitHub: "",
    miembro1Nombre: "",
    miembro1Rol: "",
    miembro2Nombre: "",
    miembro2Rol: ""
});

const manejarCambio = (e) => {
    const {name, value, type, checked} = e.target;
    setNuevoProyecto({
        ...nuevoProyecto,
        [name]: type === 'checkbox' ? checked : value
    });
};

const handleAgregar = () => {
    if (
        nuevoProyecto.titulo.trim() === "" ||
        nuevoProyecto.categoria.trim() === "" ||
        nuevoProyecto.descripcion1.trim() === "" ||
        nuevoProyecto.descripcion2.trim() === ""
    ) {
        alert("Por favor, completa el título, la categoría y al menos dos párrafos de descripción.");
        return;
    }

    const proyectoAAgregar = {
        titulo: nuevoProyecto.titulo,
        categoria: nuevoProyecto.categoria,
        estado: nuevoProyecto.estado,
        descripcionExtendida: [
            nuevoProyecto.descripcion1.trim(),
            nuevoProyecto.descripcion2.trim()
        ],
        recursos: [
            { tipo: "PDF", url: nuevoProyecto.recursoPDF.trim() },
            { tipo: "Drive", url: nuevoProyecto.recursoDrive.trim() },
            { tipo: "GitHub", url: nuevoProyecto.recursoGitHub.trim() }
        ],
        equipo: [
            { nombre: nuevoProyecto.miembro1Nombre.trim(), rol: nuevoProyecto.miembro1Rol.trim() },
            { nombre: nuevoProyecto.miembro2Nombre.trim(), rol: nuevoProyecto.miembro2Rol.trim() }
        ]
    };

    const nuevaLista = proyectoService.agregarProyecto(proyectoAAgregar);
    setProyectos(nuevaLista);
    setNuevoProyecto({
        titulo: "",
        categoria: "",
        estado: false,
        descripcion1: "",
        descripcion2: "",
        recursoPDF: "",
        recursoDrive: "",
        recursoGitHub: "",
        miembro1Nombre: "",
        miembro1Rol: "",
        miembro2Nombre: "",
        miembro2Rol: ""
    });
};

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


        <div className="novedades">
            <h3>AGREGAR PROYECTOS</h3>
            <input
                type="text"
                name="titulo"
                placeholder="Titulo"
                value={nuevoProyecto.titulo}
                onChange={manejarCambio}
            />
            <input
                type="text"
                name="categoria"
                placeholder="Categoría"
                value={nuevoProyecto.categoria} 
                onChange={manejarCambio}
            />
            <div className="checkbox-group">
                <label>
                    <input
                        type="checkbox"
                        name="estado"
                        checked={nuevoProyecto.estado}
                        onChange={manejarCambio}
                    />
                    Activo
                </label>
            </div>
            <textarea
                name="descripcion1"
                placeholder="Descripción extendida - párrafo 1"
                value={nuevoProyecto.descripcion1}
                onChange={manejarCambio}
            />
            <textarea
                name="descripcion2"
                placeholder="Descripción extendida - párrafo 2"
                value={nuevoProyecto.descripcion2}
                onChange={manejarCambio}
            />
            <input
                type="text"
                name="recursoPDF"
                placeholder="Enlace recurso PDF"
                value={nuevoProyecto.recursoPDF}
                onChange={manejarCambio}
            />
            <input
                type="text"
                name="recursoDrive"
                placeholder="Enlace recurso Drive"
                value={nuevoProyecto.recursoDrive}
                onChange={manejarCambio}
            />
            <input
                type="text"
                name="recursoGitHub"
                placeholder="Enlace repositorio GitHub"
                value={nuevoProyecto.recursoGitHub}
                onChange={manejarCambio}
            />
            <input
                type="text"
                name="miembro1Nombre"
                placeholder="Miembro 1 - nombre"
                value={nuevoProyecto.miembro1Nombre}
                onChange={manejarCambio}
            />
            <input
                type="text"
                name="miembro1Rol"
                placeholder="Miembro 1 - rol"
                value={nuevoProyecto.miembro1Rol}
                onChange={manejarCambio}
            />
            <input
                type="text"
                name="miembro2Nombre"
                placeholder="Miembro 2 - nombre"
                value={nuevoProyecto.miembro2Nombre}
                onChange={manejarCambio}
            />
            <input
                type="text"
                name="miembro2Rol"
                placeholder="Miembro 2 - rol"
                value={nuevoProyecto.miembro2Rol}
                onChange={manejarCambio}
            />

            <button onClick={handleAgregar}>
                Agregar Proyecto
            </button>
        </div>

        <div className="bienvenida">
            <h3>LISTA DE PROYECTOS</h3>
            {proyectos.length === 0 ? (<p>No hay proyectos disponibles.</p>) : (
                proyectos.map((proyecto) => (
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
        </div>


    </main>
);
};

export default Listaproyectos;