//funcion autoejecutable
const proyectoService = (() => {
const proyectos = [
    { id: 1, titulo: "Sitio web",               categoria: "Web",       estado: true  },
    { id: 2, titulo: "App de tareas",           categoria: "Mobile",    estado: false   },
    { id: 3, titulo: "Gestor de proyectos",     categoria: "Web",       estado: true  },
    { id: 4, titulo: "Tienda online",           categoria: "Comercial", estado: true },
    { id: 5, titulo: "Blog educativo",          categoria: "Web",       estado: false   },
];

const mostrarProyectos = () => {
    return [...proyectos];
};

return {
    mostrarProyectos
};

})();
export default proyectoService;

// funcion flecha para obtener proyectos
const obtenerProyectos = () => [...proyectos];
return {obtenerProyectos};

