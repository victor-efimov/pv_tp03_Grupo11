const proyectoService = (() => {

const proyectos = [
{
        id: 1,
        titulo: "Sitio web",
        categoria: "Marketing",
        estado: true,
        descripcionExtendida: [
            "Esta plataforma web corporativa fue planificada para robustecer el posicionamiento digital de la organización. Incorpora módulos avanzados de servicios, un canal directo de soporte y un blog de novedades para fidelizar usuarios.",
            "La implementación técnica hace foco en técnicas de optimización SEO modernas, interfaces adaptables a cualquier dispositivo y una navegación intuitiva orientada a incrementar las conversiones de manera orgánica."
        ],
        recursos: [
            { tipo: "PDF", url: "" },
            { tipo: "Drive", url: "" },
            { tipo: "GitHub", url: "" }
        ],
        equipo: [
            { nombre: "Mariano Bustos", rol: "Diseñador UX/UI" },
            { nombre: "Sofía Martínez", rol: "Programadora Frontend" }
        ]
    },
    {
        id: 2,
        titulo: "App de tareas",
        categoria: "Productivity",
        estado: false,
        descripcionExtendida: [
            "Un sistema móvil enfocado en optimizar la gestión del tiempo personal y laboral, el cual facilita la creación de listas de pendientes dinámicas y alarmas programadas.",
            "Ofrece opciones para configurar etiquetas de urgencia, registrar alertas con fechas límite y paneles estadísticos del progreso diario, ayudando a cumplir metas de manera eficiente."
        ],
        recursos: [
            { tipo: "PDF", url: "" },
            { tipo: "Drive", url: "" },
            { tipo: "GitHub", url: "" }
        ],
        equipo: [
            { nombre: "Claudio Juárez", rol: "Líder Técnico" },
            { nombre: "Facundo Ortega", rol: "Desarrollador Android/iOS" }
        ]
    },
    {
        id: 3,
        titulo: "Gestor de proyectos",
        categoria: "Gestión",
        estado: true,
        descripcionExtendida: [
            "Aplicación integral de administración que agrupa cronogramas, tableros de tareas e hitos del equipo bajo una interfaz unificada y visualmente organizada.",
            "Soporta flujos de seguimiento en tiempo real, tableros Kanban, reportes gerenciales automáticos y una clara asignación de roles para coordinar los esfuerzos colectivos."
        ],
        recursos: [
            { tipo: "PDF", url: "" },
            { tipo: "Drive", url: "" },
            { tipo: "GitHub", url: "" }
        ],
        equipo: [
            { nombre: "Roxana Peralta", rol: "Scrum Master" },
            { nombre: "Esteban Quiroga", rol: "Ingeniero Backend" }
        ]
    },
    {
        id: 4,
        titulo: "Tienda online",
        categoria: "Comercio",
        estado: false,
        descripcionExtendida: [
            "Solución integral de comercio electrónico que provee un catálogo interactivo de artículos, pasarelas de pago cifradas y un carrito de compras automatizado.",
            "El desarrollo da prioridad absoluta a la velocidad de respuesta en smartphones, la seguridad transaccional y un flujo de compra simplificado para reducir el abandono de carritos."
        ],
        recursos: [
            { tipo: "PDF", url: "" },
            { tipo: "Drive", url: "" },
            { tipo: "GitHub", url: "" }
        ],
        equipo: [
            { nombre: "Julieta Herrera", rol: "Especialista en Producto" },
            { nombre: "Alejandro Castro", rol: "Desarrollador Full Stack" }
        ]
    },
    {
        id: 5,
        titulo: "Blog educativo",
        categoria: "Educación",
        estado: true,
        descripcionExtendida: [
            "Portal de contenidos diseñado específicamente para centralizar la publicación de guías didácticas, apuntes de cátedra y material interactivo para alumnos y profesores.",
            "El entorno promueve el aprendizaje colaborativo mediante foros moderados de debate, sistemas de newsletters informativas y herramientas de descarga de recursos complementarios."
        ],
        recursos: [
            { tipo: "PDF", url: "" },
            { tipo: "Drive", url: "" },
            { tipo: "GitHub", url: "" }
        ],
        equipo: [
            { nombre: "Martina Valdez", rol: "Coordinadora de Contenidos" },
            { nombre: "Bautista Ríos", rol: "Administrador Web" }
        ]
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