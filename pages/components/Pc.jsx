import React, { useState } from "react";
import {
    Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Skeleton,
  Tab,
  Table,
  TableHead,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Cajon from "./Cajon";
import BarraSuperior from "./BarraSuperior";
import Pasarela from "./Pasarela";
import CustomTabPanel from "./CustomTabPanel";
import Head from "next/head";


export default function Pc() {

  const isScreenSmall = useMediaQuery('(max-width: 650px)');


  const [open, setOpen] = useState(false);
  const [caja, setCaja] = useState(false);
  const [abierto, setAbierto] = useState(false);
  const [objeto, setObjeto] = useState({});
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


  const handleChange = (event , newValue) => {
    console.log(event.target)
    console.log(newValue)
    setValue(newValue);
  };


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
          <Container>
            <Head>
              <title>Joseph Herrera</title>
              <meta name="Portafolio" content="Portafolio Joseph Herrera" />
              <meta name="viewport" content="width=device-width, initial-scale=0" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Cajon
                accionCaja={accionCaja}
                handleOpen={handleOpen}
                orientacion={"flex"}
            ></Cajon> */}
            <Grid container>

                <Grid item justifyContent="center" xs={12} >

                <Box
                    sx={{
                        background: "linear-gradient(white,blue)",
                        marginY:"8%",
                        height:"100%"
                    }}
                >
                    <Card sx={{ maxWidth: "100%", m: 2 }}>
                    {/* <Divider sx={{border:4}} ></Divider> */}
                    <BarraSuperior></BarraSuperior>
        
                    <CardHeader 
                        avatar={(
                            <Avatar sx={{width:200, height:200}}
                            alt="Joseph Herrera"
                            src="https://media.licdn.com/dms/image/D4E35AQHx-vyDrt5V3g/profile-framedphoto-shrink_200_200/0/1689807959697?e=1690484400&v=beta&t=uQMbH-oGICrnfvulNq1PMUz4gXUZYnvme1yFzVTVMpY"
                            />
                        )
                        }
                        action={(
                            <IconButton aria-label="settings">
                            {/* <MoreVertIcon /> */} 
                            </IconButton>
                        )
                        }
                        title="PROGRAMADOR FULL STACK"
                        subheader="Java Python JavaScript NodeJs postgreSQL NextJs React Redux 
                         HTML Express MongoDB SQL Sequelize Git Nestjs"
                    >

                            
                    </CardHeader>
                    
                    <CardContent sx={{justifyContent:"center"}} >

                        <Skeleton animation="wave" height={10} style={{ marginBottom: 3 }} />
                        <CardMedia
                                // sx={{position:"absolute"}}
                                component="img"
                                height="100%"
                                width="100%"
                                image="https://media.licdn.com/dms/image/D4E16AQFOBV9Y9_7tHw/profile-displaybackgroundimage-shrink_350_1400/0/1689809862987?e=1695254400&v=beta&t=qivel-_8Vps64jPCXZnb_rYhNWZ937M-ndrDtkYzouc"
                                />
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 5 }} />
                        <Grid container  justifyContent="center" justifyItems="center" justifySelf="center"  >
                            <Grid item xs={11} marginTop={4} marginLeft={1} >
                               <Typography variant="body2" color="text.secondary" component="p">
                                    Un junior no es siempre una persona con 2 años de experiencia, es aquella que puede afrontar nuevos retos, dispuesto a capacitarse y sobre todo, apto para aprender en cada oportunidad dada, por ello, soy Programador Full Stack con conocimientos en metodologías ágiles y herramientas colaborativas,  pensamiento creativo, resolución de problemas, liderazgo, trabajo en equipo, comunicación y autonomía.
                                </Typography>
                                <Typography variant="body2" color="text.secondary" component="p">
                                    Mi objetivo principal es poder dejar mi marca personal en el corazón de toda persona que se relacione conmigo, quiero lograr esto más que nada durante mi progreso como programador, ya que disfruto lo que hago y lo hago con amor, por lo que saldrá naturalmente de mí, cada esfuerzo para encontrar respuestas con código.
                                </Typography> 
                            </Grid>
                            <Grid item xs={12} sx={{ borderBottom: 1, borderColor: 'divider', marginY:5 }} >
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="Secciones y opciones"
                                    orientation={isScreenSmall ? 'vertical' : 'horizontal'}
                                    variant={isScreenSmall ? 'scrollable' : 'standard'}
                                    scrollButtons={isScreenSmall ? 'on' : 'auto'}
                                    >
                                    <Tab label="A cerca de mi" {...a11yProps(0)} />
                                    <Tab label="Proyectos" {...a11yProps(1)} />
                                    <Tab label="Habilidades Blandas" {...a11yProps(2)} />
                                    <Tab label="Habilidades Tecnicas" {...a11yProps(3)} />
                                    <Tab label="Experiencias" {...a11yProps(4)} />
                                    <Tab label="Idiomas" {...a11yProps(5)} />
                                    </Tabs>
                                <CustomTabPanel value={value} index={0}>
                                    <Grid item xs={12} >
                                        <Pasarela></Pasarela>
                                    </Grid>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={1}>
                                    Proyectos
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={2}>
                                    Habilidades Blandas
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={3}>
                                    Habilidades Tecnicas
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={4}>
                                    Experiencias
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={5}>
                                    Idiomas
                                </CustomTabPanel>
                            </Grid>
                        </Grid>
                        
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 3 }} />
                        
                    </CardContent>
                    </Card>
                </Box>
                </Grid>
            </Grid>
          </Container>
  );
}
