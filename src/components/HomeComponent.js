import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Carousel from './Carousel';
import Container from '@material-ui/core/Container'
import { FullscreenExit } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider'
//import Typography from '@material-ui/core/Typography';
//import CarouselAllies from './CarouselAllies';

const useStyles = makeStyles(theme => ({
    section: {
        marginTop: '30px'
    },
    footer:{
        backgroundColor: "#e7ebf6",
        height: "150px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: '50px'
    },
    logo:{
        width: "200px",
        height: "52px",
    },
    lineas:{
        marginTop: '30px',
        color: "white"
    },
    lineasBack:{
        backgroundColor: "#4555a4"
    },
    changeColor:{
        color: "white"
    }
  }));

const HomeComponent = () => {
    const classes = useStyles();

    return(
        <div>
        <Carousel></Carousel>
        <Container>
        <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
                <Box fontSize={24} textAlign="center" p={4}>
            La urbanización está estresando la infraestructura de las ciudades, los ecosistemas y los servicios sociales. 
            <strong>El Grupo de Investigación en Potencial Solar y Edificios Sustentables del Tecnológico de Monterrey </strong>está comprometido con la generación de propuestas sustentables para mitigar el impacto asociado a los centros urbanos.
            En este contexto, el Tecnológico de Monterrey en compañía de la Alianza para la Accción Climática - Monterrey, ICLEI - Gobiernos Locales para la Sustentabilidad y Google.org unen esfuerzos para emplear la plataforma Environmental Insights, 
            y las mejoras propuestas, como hilo conductor para generar información robusta para fortalecer y homologar los Planes de Acción Climática de los municipios del Área Metropolitana de Monterrey.
                </Box>
            </Grid>
        </Grid>
        <Paper elevation={3} className={classes.lineasBack}>
            <Box p={2}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                    <Box fontSize={30} textAlign="center" p={2} className={classes.lineas}>
                    LÍNEAS DE INVESTIGACIÓN
                    </Box>
                    <Divider variant="middle" />
                </Grid>
                <Grid item xs={12} sm={6}>
                        <Box fontSize={28} fontWeight="bold" color="white">Potencial Solar</Box>
                        <Box fontSize={22} marginTop="10px" color="white">Objetivos Específicos del Proyecto</Box>
                        <Box fontSize={16} color="white">
                            <ul>
                                <li> <div>Validar datos de radiación solar que utiliza la plataforma EIE para estimar </div>el potencial de generación de energía fotovoltaica en el AMM.​</li>
                                <br></br>
                                <li> <div>Extender la capacidad de la plataforma EIE para estimar el potencial de </div>generación de energía (térmica y eléctrica) por medio de diferentes tecnologías solares.</li>
                            </ul>
                        </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box fontSize={28} fontWeight="bold" color="white">Edificios Sustentables</Box>
                    <Box fontSize={22} marginTop="10px" color="white">Objetivos Específicos del Proyecto</Box>
                    <Box fontSize={16} color="white">
                        <ul >
                            <li> <div>Mejorar la predicción de&nbsp;la plataforma EIE para determinar el consumo de </div> <div>energía&nbsp;y las emisiones en edificios residenciales y&nbsp;no residenciales del&nbsp;AMM.</div>​​</li>
                            <li> <div>Extender&nbsp;la aplicación de&nbsp;la plataforma EIE para evaluar el uso de tecnologías</div>verdes en techos para disminuir el consumo de energía en edificios.</li>
                        </ul>
                    </Box>
                </Grid>
            </Grid>
            </Box>
        </Paper>
        </Container>
        <div className={classes.footer}>
            <img src="https://javier.rodriguez.org.mx/itesm/2014/tecnologico-de-monterrey-blue.png" width="400px" height="105px" alt="logo" className={classes.logo}></img>
        </div>
        </div>
    );
}

export default HomeComponent; 