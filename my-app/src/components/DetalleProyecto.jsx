const DetalleProyecto = ({ proyecto, cerrar }) => {

   if (!proyecto) {
      return null;
   }

   const {id, titulo, categoria, estado} = proyecto;

   return (

      <div className="detalle">

         <p>ID: {id}</p>

        <h2>{titulo}</h2>

        <p>Categoría: {categoria}</p>

        <p>
            Estado:
            {estado ? " Activo" : " Inactivo"}
        </p>

        <button onClick={cerrar}>
            Cerrar
        </button>

      </div>
   );
};

export default DetalleProyecto;