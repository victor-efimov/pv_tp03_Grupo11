import { Link } from "react-router-dom";
import { Card, CardContent, CardActions, Button} from "@mui/material";
const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {

const { id, titulo, categoria, estado } = proyecto;
return (
  <Card className="carta">
    <CardContent className="carta2">
        <h3> {titulo} </h3>
        <p> Categoría: {categoria}</p>
        <p> Estado: {estado ? "Activo" : "Inactivo"}</p>
    </CardContent>

    <div className="carta3">
      <Link to={`/proyectos/${id}`}>
      Ver detalle
      </Link>
      <button onClick={() => onEliminar(id)}>
        Eliminar
      </button>
    </div>
  </Card>
);
};
export default ProyectoCard;