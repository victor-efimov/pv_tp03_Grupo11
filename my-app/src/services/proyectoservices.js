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
return proyectos.filter(
p => p.titulo.toLowerCase().includes(texto.toLowerCase())
);
};

//agregar
const agregarProyecto = (proyecto) => {

const maxId = proyectos.length > 0
? Math.max(...proyectos.map(p => p.id))
: 0;

const nuevoProyecto = {
...proyecto,
id: maxId + 1
};

proyectos.push(nuevoProyecto);

return [...proyectos];
};

//eliminar
const eliminarProyecto = (id) => {

const indice = proyectos.findIndex(
(proyecto) => proyecto.id === id
);

if (indice !== -1) {

proyectos.splice(indice, 1);

}

return [...proyectos];

};

return {

obtenerProyectos,
agregarProyecto,
eliminarProyecto,
buscarProyecto

};

})();

export default proyectoService;