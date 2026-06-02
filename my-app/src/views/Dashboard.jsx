import proyectoService from "../services/proyectoservices";
import { Container, Box, Typography, Grid, Card, CardContent } from "@mui/material";

const Dashboard = () => {
  const totalProyectos = proyectoService.obtenerProyectos().length;
  const proyectosActivos = proyectoService
    .obtenerProyectos()
    .filter((proyecto) => proyecto.estado).length;

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'black' }}>
        Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Bienvenido al sistema gestor de proyectos. Aquí encontrarás un resumen rápido de los indicadores más relevantes.
      </Typography>

      <Grid container spacing={3}>
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