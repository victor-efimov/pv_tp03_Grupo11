import { useState } from "react";
import proyectoService from "../services/proyectoservices.js";
const Listaproyectos = () => {
const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
const handleEliminar = (id) => {
const nuevaLista = proyectoService.eliminarProyecto(id);
setProyectos(nuevaLista);
};

return(
<main>
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