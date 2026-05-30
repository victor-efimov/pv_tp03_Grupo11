import proyectoService from "../services/proyectoservices";

const Dashboard = () => {

  const totalProyectos =
    proyectoService.obtenerProyectos().length;

  const proyectosActivos =
    proyectoService
      .obtenerProyectos()
      .filter((proyecto) => proyecto.estado).length;

  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Bienvenido al sistema gestor de proyectos.
      </p>
      <div className="carta">
        <h3>Total de proyectos</h3>
        <p>{totalProyectos}</p>
      </div>
      <div className="carta">
        <h3>Proyectos activos</h3>
        <p>{proyectosActivos}</p>
      </div>
    </main>
  );
};

export default Dashboard;