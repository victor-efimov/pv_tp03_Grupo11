const usuarios = [
  {
    id: 1,
    nombre: "Octavio Ricci",
    rol: "Alumno",
    institucion: "Escuela de Minas",
    email: "octavio.ricci@example.com",
    dni: "48405926",
    contraseña: "Ricci2026!"
  },
  {
    id: 2,
    nombre: "Victor Efimov",
    rol: "Alumno",
    institucion: "Escuela de Minas",
    email: "victor.efimov@example.com",
    dni: "32578964",
    contraseña: "Efimov2026!"
  },
  {
    id: 3,
    nombre: "Nicolas Azamor",
    rol: "Alumno",
    institucion: "Escuela de Minas",
    email: "nicolas.azamor@example.com",
    dni: "48901237",
    contraseña: "Azamor2026!"
  },
  {
    id: 4,
    nombre: "Luciana Cardozo",
    rol: "Alumno",
    institucion: "Facultad de Ingeniería",
    email: "luciana.cardozo@example.com",
    dni: "57469021",
    contraseña: "Cardozo2026!"
  },
  {
    id: 5,
    nombre: "Rodolfo Ruiz",
    rol: "Docente",
    institucion: "Escuela de Minas",
    email: "rodolfo.ruiz@example.com",
    dni: "60218473",
    contraseña: "Ruiz2026!"
  }
];

const obtenerUsuarios = () => usuarios;

const autenticarUsuario = (dni, contraseña) => {
  return usuarios.find(
    (usuario) => usuario.dni === dni && usuario.contraseña === contraseña
  );
};

export default {
  obtenerUsuarios,
  autenticarUsuario,
};
