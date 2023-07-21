import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
import { Container, Grid, Link } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Image from 'next/image';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'PROYECTO RAZAS DE PERROS',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    comentario:"Proyecto individual en HENRY para mostrar mis habilidades aprendidas durante en el bootcamp, en intensidad de 700 horas, con tecnologias HTML, CSS, Javascript, React, Redux, Node.js, Express, Figma, UX/UI.",
    LinkRepo:"https://github.com/jahm1997/BestFriend",
    linkRepoBack:"",
    LinkDeployFront:"https://best-friend.vercel.app/",
    LinkDeployBack:""
  },
  {
    label: 'PROYECTO CRM',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      comentario:"proyecto CRM inspirada en empresas pequeñas, implementando un sistema de inventarios en la gestion de ventas, el proyecto fue todo un reto y demostró ser uno de los mejores en su grupo, siendo un CRM escalable, de clasificacion y una excelente aplicación full-stack segura. • Diseñar y desarrollar CRM que impactara el mercado incluyendo las siguientes tecnologias: autenticación, búsquedas, filtrados combinados, ordenamientos, baneo de usuarios, en  vío de emails, etc.• Front: React, React Tailwind, Styled Components y Javascript. • Back: Axios, Bcrypt, Bodyparser, Cooki-parser, Cors, Cron, Dotenv, Express, Firebase, Jsonwebtoken, Morgan,Multer,Nodejs cron, Nodemailer, Pg ,Pg-hstore • Base de datos: PostgreSQL y Sequelize.",
      LinkRepo:"https://github.com/jahm1997/crm-front",
      linkRepoBack:"",
      LinkDeployFront:"https://crm-henry-34b.vercel.app/",
      LinkDeployBack:""
    },
  {
    label: 'PROYECTO SMARTINFO',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
      comentario:"Proyecto individual en HENRY para mostrar mis habilidades aprendidas durante en el bootcamp, en intensidad de 700 horas, con tecnologias HTML, CSS, Javascript, React, Redux, Node.js, Express, Figma, UX/UI.",
      LinkRepo:"https://github.com/jahm1997/smart",
      linkRepoBack:"https://github.com/HanJian16/CRMBack",
      LinkDeployFront:"https://smart-delta.vercel.app/",
      LinkDeployBack:"https://smartbackend-o5kl.onrender.com/user"
    },
//   {
//     label: 'Goč, Serbia',
//     imgPath:
//       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//   },
];



function Pasarela() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  // const handleStepChange = (newIndex) => {
  //   setActiveStep(newIndex);
  // }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };


  return (
    <Container sx={{justifyContent:"center", textAlign:"center", bgcolor: "whitesmoke"}} >
        <Typography >{images[activeStep].label}</Typography>
    
        <Box sx={{ maxWidth: "100%", flexGrow: 1, display:"flex" }}>
            <Box >
                <Paper
                    square
                    elevation={0}
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 60,
                    pl: 2,
                    bgcolor: 'whitesmoke',
                    }}
                >
                </Paper>
                <Box display="flex" overflowX="hidden">
                  <Image width='340' height='280'src={images[activeStep].imgPath} alt={images[activeStep].label} />                    
                </Box>
            </Box>

            <Box  sx={{ marginLeft:5, maxWidth: "50%", paddingTop:5}} >
                {images[activeStep].comentario}
                    <br />
                {images[activeStep].LinkRepo && <Link href={images[activeStep].LinkRepo}variant="body2" >
                    Ir a respositorio <CallMadeIcon /> 
                </Link>}
                    <br />
                {images[activeStep].LinkRepo && <Link href={images[activeStep].linkRepoBack} variant="body2" >
                    Ir a repositorio Backend <CallMadeIcon /> 
                </Link>}
                    <br />
                {images[activeStep].LinkDeployFront && <Link href={images[activeStep].LinkDeployFront} variant="body2" >
                    Ir a deploy FrontEnd <CallMadeIcon /> 
                </Link>}
                    <br />
                {images[activeStep].LinkDeployBack && <Link href={images[activeStep].LinkDeployBack} variant="body2" >
                    Ir al deploy Backend <CallMadeIcon /> 
                </Link>} 
            </Box>
        </Box  >
        <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
            <Button
                variant='contained'
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
            >
                Next
                {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
                ) : (
                <KeyboardArrowRight />
                )}
            </Button>
            }
            backButton={
            <Button size="small" variant='contained' onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
                ) : (
                <KeyboardArrowLeft />
                )}
                Back
            </Button>
            }
          />
    </Container>
  );
}

export default Pasarela;
