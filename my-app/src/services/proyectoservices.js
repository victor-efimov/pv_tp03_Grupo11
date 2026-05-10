const proyectoService = (() => {

const proyectos = [

{
id: 1,
titulo: "Sitio web",
categoria: "Marketing",
estado: "Activo"
},

{
id: 2,
titulo: "App de tareas",
categoria: "Productividad",
estado: "Pendiente"
},

{
id: 3,
titulo: "Gestor de proyectos",
categoria: "Gestión",
estado: "Activo"
},

{
id: 4,
titulo: "Tienda online",
categoria: "Comercio",
estado: "Finalizado"
},

{
id: 5,
titulo: "Blog educativo",
categoria: "Educación",
estado: "Activo"
}

];

const obtenerProyectos = () => {

return [...proyectos];

};

const eliminarProyecto = (id) => {

return proyectos.filter((proyecto) => proyecto.id !== id);

};

return {

obtenerProyectos,
eliminarProyecto

};

})();

export default proyectoService;