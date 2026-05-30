const PerfilUsuario = () => {
  const usuarios = [
    {
      id: 1,
      nombre: "Octavio Ricci",
      rol: "Alumno",
      institucion: "Escuela de Minas"
    },
    {
      id: 2,
      nombre: "Rodolfo Ruiz",
      rol: "Docente",
      institucion: "Escuela de Minas"
    }
  ];

  return (
    <main>
      <h2>Perfiles de Usuario</h2>

      {usuarios.map((usuario) => (
        <div className="carta" key={usuario.id}>
          <h3>{usuario.nombre}</h3>
          <p>Rol: {usuario.rol}</p>
          <p>Institución: {usuario.institucion}</p>
        </div>
      ))}
    </main>
  );
};

export default PerfilUsuario;