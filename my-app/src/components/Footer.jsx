import { Box, Typography } from "@mui/material";
import '../css/Footer.css';
const Footer = () => {
    return(
    <Box component="footer"
        sx={{
            textAlign: "center",
            padding: 3,
            marginTop: 4
        }}
    >
        <Typography>
            2026 | GESTOR ACADEMICO - Plataforma de Gestión Académica
        </Typography>
        <Typography>
            Desarrollado por: Grupo 11
        </Typography>
    </Box>
    );
}
export default Footer;