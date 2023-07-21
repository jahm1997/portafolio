import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddchartIcon from '@mui/icons-material/Addchart';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, Collapse, Divider , IconButton, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Snackbar } from "@mui/material";
import React from "react";

const ancho = 600

const Opciones = ({abrirCaja, orientacion, tipo}) => {

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
    abrirCaja()
  };

  const [abierto, setAbierto] = React.useState(false);
  const handleClickeado = () => {
    setAbierto(!abierto);
  };
  
  const [snack, setSnack] = React.useState(false);
  const closeSnack = () => {
    setSnack(!snack);
  };
  
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={closeSnack}>
        Cerrar
      </Button>
    </React.Fragment>
  );


  return (
    <Box >
      <List
        sx={{ width: 'auto', maxWidth: "auto", bgcolor: 'background.paper', display:orientacion?orientacion:"column"}}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <>
            <ListSubheader  id="nested-list-subheader" >
              Joseph H.
            </ListSubheader>
          </>
        }
      >
      
        <Divider orientation="vertical" flexItem/>
        <ListItemButton >
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText sx={{[`@media (max-width:715px)`]: { display:"none" }}} primary="A cerca de mi" />
        </ListItemButton>
        <Divider orientation="vertical" flexItem/>

        <ListItemButton  onClick={handleClick}  >
          <ListItemIcon>
            <AddchartIcon />
          </ListItemIcon>
          <ListItemText sx={{[`@media (max-width:${ancho}px)`]: { display:"none" }}} primary="Habilidades"></ListItemText>
          {open ? <Divider orientation="vertical" flexItem > <ArrowBackIosIcon /> </Divider> : <ArrowForwardIosIcon />}
        </ListItemButton>
        
        <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider orientation="vertical" flexItem/>
          <List disablePadding>
            <ListItemButton sx={{ pl: 1 }} >
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText sx={{[`@media (max-width:${ancho}px)`]: { display:"none" }}} primary="Habilidades Blandas" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText sx={{[`@media (max-width:${ancho}px)`]: { display:"none" }}} primary="Habilidades Tecnicas" />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider orientation="vertical" flexItem/>

        <ListItemButton onClick={handleClickeado}>
          <ListItemIcon>
            <FactCheckIcon />
          </ListItemIcon>
          <ListItemText sx={{[`@media (max-width:${ancho}px)`]: { display:"none" }}} primary="Proyectos" />
          {abierto ? <Divider orientation="vertical" flexItem > <ArrowBackIosIcon /> </Divider> : <ArrowForwardIosIcon />}
        </ListItemButton>
        <Collapse in={abierto} timeout="auto" unmountOnExit>
        <Divider orientation="vertical" flexItem/>
          <List  disablePadding>
            <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText sx={{[`@media (max-width:${ancho}px)`]: { display:"none" }}} primary="Proyecto Perros" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText sx={{[`@media (max-width:${ancho}px)`]: { display:"none" }}} primary="Proyecto CRM" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 1 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText sx={{[`@media (max-width:${ancho}px)`]: { display:"none" }}} primary="Smart Info" />
            </ListItemButton>
          </List>
        </Collapse>
        <Snackbar
          open={snack}
          autoHideDuration={6000}
          onClose={closeSnack}
          message="Gracias por visitarme"
          action={action}
        />
      </List>
    </Box>
  );
};

export default Opciones;
