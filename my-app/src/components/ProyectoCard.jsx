const ProyectoCard = ({ proyecto, onEliminar }) => {

const { id, titulo, categoria, estado } = proyecto;
return (
<div className="carta">
<div className="carta2">
<h3>{titulo}</h3>
<p>{categoria}</p>
<p>{estado}</p>
</div>
<div className="carta3">
<button>Ver detalle</button>
<button onClick={() => onEliminar(id)}>
Eliminar
</button>

</div>
</div>);
};
export default ProyectoCard;