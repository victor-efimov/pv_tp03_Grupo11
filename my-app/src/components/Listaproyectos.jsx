import { useState } from "react";
import proyectoService from "../services/proyectoservices.js";
import '../css/Listaproyectos.css'; 

const Listaproyectos = () => {

const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
const [busqueda, setBusqueda] = useState("");
const handleEliminar = (id) => {
        console.log('Eliminando proyecto con id:', id);
        const nuevaLista = proyectoService.eliminarProyecto(id);
        console.log('Nueva lista:', nuevaLista);
        setProyectos(nuevaLista);
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
    estado: false
});

const manejarCambio = (e) => {
    const {name, value, type, checked} = e.target;
    setNuevoProyecto({
        ...nuevoProyecto,
        [name]: type === 'checkbox' ? checked : value
    });
};

const handleAgregar = () => {
    if (nuevoProyecto.titulo.trim() === "" || nuevoProyecto.categoria.trim() === "") {
        alert("Por favor, completa el título y la categoría.");
        return;
    }
    const nuevaLista = proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(nuevaLista);
    setNuevoProyecto({
        titulo: "",
        categoria: "",
        estado: false
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

            <button onClick={handleAgregar}>
                Agregar Proyecto
            </button>
        </div>

        <div className="bienvenida">
            <h3>LISTA DE PROYECTOS</h3>
            {proyectos.length === 0 ? (<p>No hay proyectos disponibles.</p>) : (
                proyectos.map((proyecto) => (
                    <div key={proyecto.id} className="cartagrande">
                        <h4>{proyecto.titulo}</h4>
                        <p>ID: {proyecto.id}</p>
                        <p>Categoría: {proyecto.categoria}</p>
                        <p>Estado: {proyecto.estado ? "Activo" : "Inactivo"}</p>
                        <button>Ver detalle</button>
                        <button onClick={() => handleEliminar(proyecto.id)}>Eliminar</button>
                    </div>
                ))
            )}
        </div>


    </main>
);
};

export default Listaproyectos;