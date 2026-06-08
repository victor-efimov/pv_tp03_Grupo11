import { useParams, Link } from "react-router-dom";
import proyectoService from "../services/proyectoservices.js";
import { Container, Paper, Typography, Button } from "@mui/material";

const DetalleProyecto = () => {
  const { id } = useParams();
  const proyecto = proyectoService.obtenerProyectoPorId(id);

  if (!proyecto) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4">Proyecto no encontrado</Typography>
        <Button component={Link} to="/proyectos" variant="contained" sx={{ mt: 2 }}>
          Volver a proyectos
        </Button>
      </Container>
    );
  }

  const { titulo, categoria, estado, descripcionExtendida = [], recursos = [], equipo = [] } = proyecto;

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper className="detalle" sx={{ p: 4 }}>
        <Typography>ID: {id}</Typography>
        <Typography variant="h4">{titulo}</Typography>
        <Typography>Categoría: {categoria}</Typography>
        <Typography>Estado: {estado ? "Activo" : "Inactivo"}</Typography>

        <section>
          <Typography variant="h5">Descripción extendida</Typography>
          {descripcionExtendida.length > 0
            ? descripcionExtendida.map((parrafo, index) => <Typography key={index}>{parrafo}</Typography>)
            : <Typography>No hay descripción extendida disponible.</Typography>}
        </section>

        <section>
          <Typography variant="h5">Recursos</Typography>
          {recursos.length > 0 ? (
            <ul>
              {recursos.map((recurso, index) => (
                <li key={index}>
                  {recurso.url ? <a href={recurso.url} target="_blank" rel="noreferrer">{recurso.tipo}</a> : <span>{recurso.tipo}: Sin enlace</span>}
                </li>
              ))}
            </ul>
          ) : <Typography>No hay recursos registrados.</Typography>}
        </section>

        <section>
          <Typography variant="h5">Equipo</Typography>
          {equipo.length > 0 ? (
            <ul>
              {equipo.map((miembro, index) => (
                <li key={index}><strong>{miembro.nombre}</strong> - {miembro.rol}</li>
              ))}
            </ul>
          ) : <Typography>No hay información de equipo disponible.</Typography>}
        </section>

        <Button component={Link} to="/proyectos" variant="contained">
          Volver
        </Button>
      </Paper>
    </Container>
  );
};
export default DetalleProyecto;