import { useParams, Link } from "react-router-dom";
import proyectoService from "../services/proyectoservices.js";

const DetalleProyecto = () => {
  const { id } = useParams();

  const proyecto = proyectoService.obtenerProyectoPorId(id);

  if (!proyecto) {
    return (
      <main>
        <h2>Proyecto no encontrado</h2>

        <Link to="/proyectos">
          Volver a proyectos
        </Link>
      </main>
    );
  }

  const {
    titulo,
    categoria,
    estado,
    descripcionExtendida = [],
    recursos = [],
    equipo = []
  } = proyecto;

  return (
    <main className="detalle">
      <p>ID: {id}</p>

      <h2>{titulo}</h2>

      <p>Categoría: {categoria}</p>

      <p>Estado: {estado ? "Activo" : "Inactivo"}</p>

      <section>
        <h3>Descripción extendida</h3>

        {descripcionExtendida.length > 0 ? (
          descripcionExtendida.map((parrafo, index) => (
            <p key={index}>{parrafo}</p>
          ))
        ) : (
          <p>No hay descripción extendida disponible.</p>
        )}
      </section>

      <section>
        <h3>Recursos</h3>

        {recursos.length > 0 ? (
          <ul>
            {recursos.map((recurso, index) => (
              <li key={index}>
                {recurso.url ? (
                  <a href={recurso.url} target="_blank" rel="noreferrer">
                    {recurso.tipo}
                  </a>
                ) : (
                  <span>{recurso.tipo}: Sin enlace</span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay recursos registrados.</p>
        )}
      </section>

      <section>
        <h3>Equipo</h3>

        {equipo.length > 0 ? (
          <ul>
            {equipo.map((miembro, index) => (
              <li key={index}>
                <strong>{miembro.nombre}</strong> - {miembro.rol}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay información de equipo disponible.</p>
        )}
      </section>

      <Link to="/proyectos">
        Volver
      </Link>
    </main>
  );
};

export default DetalleProyecto;