import { useState } from "react";
import proyectoService from "../services/proyectoservices.js";

const Listaproyectos = () => {

const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
const [busqueda, setBusqueda] = useState("");
const handleEliminar = (id) => {
        const nuevaLista = proyectoService.eliminarProyecto(id);
        setProyectos(nuevaLista);
};
const handleBuscar = () => {
        const texto = busqueda.trim().toLowerCase();
        const proyectosEncontrados = proyectoService.obtenerProyectos().filter((proyecto) => String(proyecto.id) === texto || proyecto.titulo.toLowerCase().includes(texto));
        setProyectos(proyectosEncontrados);
};

    return (
        <main>


        <div>
        <h3>BUSCAR PROYECTOS</h3>
        <input
            type="text"
            name="id"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="ID o título"
        />
        <button onClick={handleBuscar}>Buscar proyecto</button>
        </div>


        <h3>AGREGAR PROYECTOS</h3>
        <div>
            <input
                type="text"
                placeholder="Título"
            />
            <input
                type="text"
                placeholder="Categoría"
            />
            <p>Estado:</p>
            <label>
                <input
                    type="checkbox"
                />
                Activo
            </label>
            <button>Agregar proyecto</button>
        </div>


        <h3>LISTA DE PROYECTOS</h3>
        <div>
            {proyectos.length === 0 ? (<p>No hay proyectos disponibles.</p>) : (
                proyectos.map((proyecto) => (
                    <div key={proyecto.id}>
                        <h4>{proyecto.titulo}</h4>
                        <p>ID: {proyecto.id}</p>
                        <p>Categoría: {proyecto.categoria}</p>
                        <p>Estado: {proyecto.estado}</p>
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