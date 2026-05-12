import { useState } from "react";
import proyectoService from "../services/proyectoservices.js";
const Listaproyectos = () => {
const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
const handleEliminar = (id) => {
const nuevaLista = proyectoService.eliminarProyecto(id);
setProyectos(nuevaLista);
};

const [nuevoProyecto, setNuevoProyecto] = useState({
   titulo: "",
   categoria: ""
});

const manejarCambio = (e) => {
    const {name, value, type, checked} = e.target;
    setNuevoProyecto({
        ...nuevoProyecto,
        [name]: type === 'checkbox' ? checked : value
    });
};

const handleAgregar = () => {
    const nuevaLista = proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(nuevaLista);
    setNuevoProyecto({
        titulo: "",
        categoria: ""
    });
};

return(
<main>

    <div className="tarjetaAgregarProyecto">
    
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
    
    <button onClick={handleAgregar}>
        Agregar Proyecto
    </button>
    
    </div>   

<div className="carta">

<div className="carta2">

<label>Titulo:</label>

</div>

<div></div>

<div className="carta3">
<button>Ver detalle</button>
<button onClick={() => handleEliminar(1)}>
Eliminar
</button>

</div>

</div>

</main>
)}
export default Listaproyectos;