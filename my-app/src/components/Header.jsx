import { useContext } from "react";
import {Box,Typography,Button,Paper} from "@mui/material";
import { UsuarioContext } from "../context/UsuarioContext";
import "../css/Header.css";

const Header = () => {
  const { usuario, logout } = useContext(UsuarioContext);
  return (
    <Paper elevation={3}
      sx={{
        padding: 3,
        marginBottom: 3
      }}
    >

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2
        }}
      >

        <Box>

          <Typography variant="h4">

            Gestión de Proyectos Educativos
         </Typography>
          <Typography variant="body1">

            Trabajo desarrollado con React

          </Typography>

        </Box>

        <Box className="usuario-info">

          <Typography variant="h6">

            {usuario ? usuario.nombre : "Invitado"}

          </Typography>

          <Typography variant="body2">

            {usuario ? usuario.rol : "No autenticado"}

          </Typography>

          {usuario && (

            <Button
              type="button"
              variant="contained"
              color="error"
              sx={{ mt: 1 }}
              onClick={logout}
            >

              Cerrar sesión

            </Button>
          )}
        </Box>
      </Box>
    </Paper>
  );
};
export default Header;