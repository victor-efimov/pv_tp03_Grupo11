import { Container, Typography, Grid, Card, CardContent, Avatar, Box } from "@mui/material";
import usuarioService from "../services/usuarioService";

const PerfilUsuario = () => {
  const usuarios = usuarioService.obtenerUsuarios();

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'black' }}>
        Perfil de Usuario
      </Typography>
      <Typography variant="body1" color="text.secondary" component="p">
        Datos simulados de alumnos y docentes organizados de manera clara y accesible.
      </Typography>

      <Grid container spacing={3}>
        {usuarios.map((usuario) => (
          <Grid item xs={12} md={6} key={usuario.id}>
            <Card elevation={3}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    {usuario.nombre.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="h6">{usuario.nombre}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {usuario.rol}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2">
                  Institución: <strong>{usuario.institucion}</strong>
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Correo: <strong>{usuario.email}</strong>
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  DNI: <strong>{usuario.dni}</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PerfilUsuario;