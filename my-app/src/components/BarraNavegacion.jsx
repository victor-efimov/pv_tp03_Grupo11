import React from 'react';

import { NavLink } from "react-router-dom";

import {AppBar,Toolbar,Button,Box} from "@mui/material";

import '../css/BarraNavegacion.css';
const BarraNavegacion = () => {
  return (
    <AppBar position="static">

      <Toolbar>

        <Box sx={{ display: "flex", gap: 2 }}>

          <Button
            color="inherit"
            component={NavLink}
            to="/dashboard"
          >
            Inicio
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/proyectos"
          >
            Proyectos
          </Button>

          <Button
            color="inherit"
            component={NavLink}
            to="/perfil"
          >
            Perfil
          </Button>

        </Box>

      </Toolbar>

    </AppBar>

  );

};

export default BarraNavegacion;