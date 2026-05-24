const RegistroActividad = ({ fechaHora }) => {

const fecha = fechaHora ? new Date(fechaHora) : null;
const fechaFormateada = fecha
    ? fecha.toLocaleString("es-AR", {
        dateStyle: "medium",
        timeStyle: "short",
    })
    : null;

    return (
    <div className="registro-actividad">
        <p className="registro-actividad__texto">
            {fechaFormateada
                ? `Última modificación: ${fechaFormateada}`
                : "Aún no hay cambios registrados en los proyectos."}
        </p>
    </div>
) ;
};

export default RegistroActividad;
