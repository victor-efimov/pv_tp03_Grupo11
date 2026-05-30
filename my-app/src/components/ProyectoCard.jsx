import { Link } from "react-router-dom";
const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {

const { id, titulo, categoria, estado } = proyecto;
return (
<div className="carta">
<div className="carta2">
<h3>{titulo}</h3>
<p>{categoria}</p>
<p>{estado}</p>
</div>
<div className="carta3">
<Link to={`/proyectos/${id}`}>
  Ver detalle
</Link>
<button onClick={() => onEliminar(id)}>
  Eliminar
</button>

</div>
</div>);
};
export default ProyectoCard;