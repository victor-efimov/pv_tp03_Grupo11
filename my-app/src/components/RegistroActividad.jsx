const RegistroActividad = ({ fechaHora }) => {
    const fecha = fechaHora ? (fechaHora instanceof Date ? fechaHora : new Date(fechaHora)) : null;

    const fechaFormateada = fecha && !Number.isNaN(fecha.getTime())
        ? `Última actualización de la lista: ${String(fecha.getDate()).padStart(2, "0")}/${String(fecha.getMonth() + 1).padStart(2, "0")}/${fecha.getFullYear()} a las ${String(fecha.getHours()).padStart(2, "0")}:${String(fecha.getMinutes()).padStart(2, "0")} hs.`
        : null;

    return (
        <div className="registro-actividad">
            <p className="registro-actividad__texto">
                {fechaFormateada
                    ? fechaFormateada
                    : "Aún no hay cambios registrados en los proyectos."}
            </p>
        </div>
    );
};

export default RegistroActividad;
