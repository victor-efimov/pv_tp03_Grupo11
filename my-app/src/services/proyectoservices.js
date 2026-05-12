const proyectoService = (() => {

const proyectos = [

{
id: 1,
titulo: "Sitio web",
categoria: "Marketing",
estado: true
},

{
id: 2,
titulo: "App de tareas",
categoria: "Productividad",
estado: false
},

{
id: 3,
titulo: "Gestor de proyectos",
categoria: "Gestión",
estado: true
},

{
id: 4,
titulo: "Tienda online",
categoria: "Comercio",
estado: false
},

{
id: 5,
titulo: "Blog educativo",
categoria: "Educación",
estado: true
}

];

//mostrar
const obtenerProyectos = () => {
return [...proyectos];
};
//buscar
const buscarProyecto = (texto) => {
    return proyectos.filter(p => p.titulo.toLowerCase().includes(texto.toLowerCase()));
};
//eliminar
const eliminarProyecto = (id) => {
return proyectos.filter((proyecto) => proyecto.id !== id);
};

return {

obtenerProyectos,
eliminarProyecto,
buscarProyecto

};

})();

export default proyectoService;