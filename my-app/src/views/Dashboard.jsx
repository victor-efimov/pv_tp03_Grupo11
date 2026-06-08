import { useState, useContext } from "react";
import proyectoService from "../services/proyectoservices";
import { UsuarioContext } from "../context/UsuarioContext";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
} from "@mui/material";

const Dashboard = () => {
  const { usuario, login } = useContext(UsuarioContext);
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [dniError, setDniError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const totalProyectos = proyectoService.obtenerProyectos().length;
  const proyectosActivos = proyectoService
    .obtenerProyectos()
    .filter((proyecto) => proyecto.estado).length;

  const validarDni = (valor) => {
    if (!valor.trim()) {
      return "El DNI es obligatorio.";
    }
    if (!/^[0-9]{8}$/.test(valor.trim())) {
      return "El DNI debe contener exactamente 8 dígitos.";
    }
    return "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevoDniError = validarDni(dni);
    const nuevoPasswordError = password ? "" : "La contraseña es obligatoria.";

    setDniError(nuevoDniError);
    setPasswordError(nuevoPasswordError);
    setError("");

    if (nuevoDniError || nuevoPasswordError) {
      return;
    }

    const ingresoValido = login(dni.trim(), password);
    if (!ingresoValido) {
      setError("DNI o contraseña incorrectos. Revisa los datos e intenta nuevamente.");
      return;
    }
  };

  const mensajeBienvenida = usuario
    ? `Bienvenido, ${usuario.nombre}. Aquí encontrarás un resumen rápido de los indicadores más relevantes.`
    : "Ingrese su DNI y contraseña para acceder al dashboard. Solo los usuarios mostrados en Perfil de Usuario pueden iniciar sesión.";

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'black' }}>
        Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary" component="p">
        {mensajeBienvenida}
      </Typography>

      {!usuario && (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 480, mt: 2 }}>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <TextField
            label="DNI"
            value={dni}
            onChange={(event) => setDni(event.target.value)}
            fullWidth
            margin="normal"
            error={Boolean(dniError)}
            helperText={dniError || "Ingrese su DNI de 8 dígitos."}
          />

          <TextField
            label="Contraseña"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            fullWidth
            margin="normal"
            error={Boolean(passwordError)}
            helperText={passwordError || "Ingrese su contraseña."}
          />

          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Iniciar sesión
          </Button>
        </Box>
      )}

      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={8}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Total de proyectos
              </Typography>
              <Typography variant="h3" component="p">
                {totalProyectos}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Proyectos registrados en el sistema.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Proyectos en curso
              </Typography>
              <Typography variant="h3" component="p">
                {proyectosActivos}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Proyectos activos que se encuentran en ejecución.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Card elevation={2}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Informe general
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Este panel ofrece una visión inicial de los proyectos, permitiendo tomar decisiones rápidas y enfocadas. Navega a la lista de proyectos para ver detalles y estados individuales.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Dashboard;