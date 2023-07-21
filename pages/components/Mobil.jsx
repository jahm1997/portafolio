import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import Cajon from "./Cajon";

export default function Mobil() {
  const [open, setOpen] = useState(false);
  const [caja, setCaja] = useState(false);
  const [abierto, setAbierto] = useState(false);
  const [objeto, setObjeto] = useState({});
  const [failed, setFailed] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleAbrir = () => {
    console.log("se abre la caja");
    setAbierto(!abierto);
  };
  const handleCerrar = () => {
    setAbierto(!abierto);
  };
  const handlefailopen = () => {
    setFailed(!failed);
  };
  const handlefailclose = () => {
    setFailed(!failed);
  };
  const accionCaja = () => {
    console.log("se abre la caja");
    setCaja(!caja);
  };
  return (
      <Grid container>
        <Grid item xs={12} position="fixed" >
          <Cajon
            accionCaja={accionCaja}
            handleOpen={handleOpen}
            // orientacion={"flex"}
          ></Cajon>
        </Grid>

        <Grid>
          <Box
            sx={{
              background: "blue",
            }}
          >
            <Typography variant="h1">Hola!</Typography>
            <Typography variant="h1">Soy Joseph Herrera</Typography>
            <Typography variant="h1">Desarrollador Full Stack!</Typography>
          </Box>
        </Grid>
      </Grid>
  );
}
