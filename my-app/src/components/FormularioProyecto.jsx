import { useState } from "react";
import { TextField, Button, Box, Grid, Checkbox, FormControlLabel, Typography, Card, CardContent} from "@mui/material";

const FormularioProyecto = ({ agregarProyecto }) => {
const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: "",
    categoria: "",
    estado: false,
    descripcion1: "",
    descripcion2: "",
    recursoPDF: "",
    recursoDrive: "",
    recursoGitHub: "",
    miembro1Nombre: "",
    miembro1Rol: "",
    miembro2Nombre: "",
    miembro2Rol: ""
});

const manejarCambio = (e) => {
    const {name, value, type, checked} = e.target;
    setNuevoProyecto({
        ...nuevoProyecto,
        [name]: type === 'checkbox' ? checked : value
    });
};

const handleAgregar = () => {
    if (
        nuevoProyecto.titulo.trim() === "" ||
        nuevoProyecto.categoria.trim() === "" ||
        nuevoProyecto.descripcion1.trim() === "" ||
        nuevoProyecto.descripcion2.trim() === ""
    ) {
        alert("Por favor, completa el título, la categoría y al menos dos párrafos de descripción.");
        return;
    }

    const proyectoAAgregar = {
        titulo: nuevoProyecto.titulo,
        categoria: nuevoProyecto.categoria,
        estado: nuevoProyecto.estado,
        descripcionExtendida: [
            nuevoProyecto.descripcion1.trim(),
            nuevoProyecto.descripcion2.trim()
        ],
        recursos: [
            { tipo: "PDF", url: nuevoProyecto.recursoPDF.trim() },
            { tipo: "Drive", url: nuevoProyecto.recursoDrive.trim() },
            { tipo: "GitHub", url: nuevoProyecto.recursoGitHub.trim() }
        ],
        equipo: [
            { nombre: nuevoProyecto.miembro1Nombre.trim(), rol: nuevoProyecto.miembro1Rol.trim() },
            { nombre: nuevoProyecto.miembro2Nombre.trim(), rol: nuevoProyecto.miembro2Rol.trim() }
        ]
    };

    agregarProyecto(proyectoAAgregar);
    setNuevoProyecto({
        titulo: "",
        categoria: "",
        estado: false,
        descripcion1: "",
        descripcion2: "",
        recursoPDF: "",
        recursoDrive: "",
        recursoGitHub: "",
        miembro1Nombre: "",
        miembro1Rol: "",
        miembro2Nombre: "",
        miembro2Rol: ""
    });
};

return(
    <Box className="novedades" >
    <Card elevation={0}> 
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.5 }} >

            <h3>AGREGAR PROYECTOS</h3>

            <TextField label="Título" name="titulo" fullWidth value={nuevoProyecto.titulo} onChange={manejarCambio} sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px"} }} />

            <TextField label="Categoría" name="categoria" fullWidth value={nuevoProyecto.categoria} onChange={manejarCambio} sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px"} }} />

            <FormControlLabel control={
                <Checkbox name="estado" checked={nuevoProyecto.estado} onChange={manejarCambio} />} 
                label="Activo"
            />

            <TextField label="Descripción 1" name="descripcion1" fullWidth multiline rows={2} value={nuevoProyecto.descripcion1} onChange={manejarCambio} sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px"} }}/>

            <TextField label="Descripción 2" name="descripcion2" fullWidth multiline rows={2} value={nuevoProyecto.descripcion2} onChange={manejarCambio} sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px"} }}/>

            <TextField label="PDF" name="recursoPDF" fullWidth value={nuevoProyecto.recursoPDF} onChange={manejarCambio} sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px"} }}/>

            <TextField label="Drive" name="recursoDrive" fullWidth value={nuevoProyecto.recursoDrive} onChange={manejarCambio} sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px"} }} />

            <TextField label="GitHub" name="recursoGitHub" fullWidth value={nuevoProyecto.recursoGitHub} onChange={manejarCambio} sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px"} }}/>

            <TextField label="Miembro 1" name="miembro1Nombre" fullWidth value={nuevoProyecto.miembro1Nombre} onChange={manejarCambio} sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px"} }}/>

            <TextField label="Rol 1" name="miembro1Rol" fullWidth value={nuevoProyecto.miembro1Rol} onChange={manejarCambio} sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px"} }} />

            <TextField label="Miembro 2" name="miembro2Nombre" fullWidth value={nuevoProyecto.miembro2Nombre} onChange={manejarCambio} sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px"} }}/>

            <TextField label="Rol 2" name="miembro2Rol" fullWidth value={nuevoProyecto.miembro2Rol} onChange={manejarCambio} sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px"} }} />

            <Button variant="contained" fullWidth onClick={handleAgregar} sx={{ bgcolor: "#3f51b5" }}>
            Agregar Proyecto
            </Button>

        </CardContent>
        </Card>
    </Box>
); };

export default FormularioProyecto;