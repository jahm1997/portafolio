import { Box, Drawer, Paper } from '@mui/material';
import React from 'react';
import Opciones from './Opciones';

export default function Cajon({ abrirCaja, onClose = null, handleOpen, caja, accionCaja, handleClose, orientacion }) {
  return (
    <>
      <Paper sx={{ [`@media (max-width:530px)`]: {
              display: "none",
            } }}>
        <Drawer variant="permanent" classes={{ paperAnchorTop: 220 }} anchor="top">
          <Opciones handleOpen={handleOpen} abrirCaja={accionCaja} orientacion={orientacion} />
        </Drawer>
      </Paper>

      <Paper sx={{ [`@media (min-width:530px)`]: {
              display: "none",
            } }}>
      <Drawer variant="permanent" classes={{ anchor: 220 }} anchor="left">
        <Opciones handleOpen={handleOpen} abrirCaja={accionCaja} />
      </Drawer>
    </Paper></>
  );
}
