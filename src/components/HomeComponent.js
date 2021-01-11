import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Carousel from './Carousel';
import Container from '@material-ui/core/Container'
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
        height: "250px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: '50px'
    },
    footersection:{
        height: "150px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
    lineas:{
        color: "white"
    },
    logo:{
        margin: "10px"
    },
    lineasBack:{
        backgroundColor: "#261149"
    },
    changeColor:{
        color: "white",
        background: "white"
    },
    list:{
        display: 'inline-block'
    },
    imgDiv:{
        imageRendering: '-webkit-optimize-contrast',
        display: 'flex',
        justifyContent: 'center',
        marginTop: "50px",
        marginBottom: "50px"
    }
  }));

const HomeComponent = () => {
    const classes = useStyles();

    return(
        <div>
        <Carousel></Carousel>
        <Container>
        <div className={classes.section}></div>
        <div className={classes.imgDiv}>
            <img src="original.svg" alt="solarandbuildingslogo" height="40%" width="40%"/>
        </div>
            <Box fontSize={28} fontFamily='Tenor Sans' textAlign="center" p={4}>
        La urbanización está estresando la infraestructura de las ciudades, los ecosistemas y los servicios sociales. 
        <strong>El Grupo de Investigación en Potencial Solar y Edificios Sustentables del Tecnológico de Monterrey </strong>está comprometido con la generación de propuestas sustentables para mitigar el impacto asociado a los centros urbanos.
        En este contexto, el Tecnológico de Monterrey en compañía de la Alianza para la Accción Climática - Monterrey, ICLEI - Gobiernos Locales para la Sustentabilidad y Google.org unen esfuerzos para emplear la plataforma Environmental Insights, 
        y las mejoras propuestas, como hilo conductor para generar información robusta para fortalecer y homologar los Planes de Acción Climática de los municipios del Área Metropolitana de Monterrey.
            </Box>
        <div className={classes.section}></div>
        <div className={classes.section}></div>
        <Paper elevation={3} className={classes.lineasBack}>
            <Box p={2}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                    <Box fontSize={38} fontFamily='Tenor Sans' textAlign="center" p={5} className={classes.lineas}>
                    LINEAS DE INVESTIGACION
                    </Box>
                    <Divider variant="middle" className={classes.changeColor}/>
                    
                </Grid>
                <Grid item xs={12} sm={6}>
                        <div className={classes.section}>

                        </div>
                        <Box fontSize={28} fontFamily='Tenor Sans' textAlign="center" fontWeight="bold" color="white" marginBottom={3}>Potencial Solar</Box>
                        <Box fontSize={22} fontFamily='Tenor Sans' textAlign="center" fontWeight="light" marginTop="10px" color="white" marginBottom={4}>Objetivos Específicos del Proyecto</Box>
                        <Box fontSize={14} fontFamily='Tenor Sans' textAlign="center" color="white" marginBottom="40px">
                            <div>
                            - Validar datos de radiación solar que utiliza la plataforma EIE para estimar el potencial de generación de energía fotovoltaica en el AMM.​
                            </div>
                            <br></br>
                            <div>
                            - Extender la capacidad de la plataforma EIE para estimar el potencial de generación de energía (térmica y eléctrica) por medio de diferentes tecnologías solares.
                            </div>
                        </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                <div className={classes.section}>
                            
                            </div>
                    <Box fontSize={28} fontFamily='Tenor Sans' textAlign="center" fontWeight="bold" color="white"  marginBottom={3}>Edificios Sustentables</Box>
                    <Box fontSize={22} fontFamily='Tenor Sans' textAlign="center" marginTop="10px" color="white" marginBottom={4}>Objetivos Específicos del Proyecto</Box>
                    <Box fontSize={14} fontFamily='Tenor Sans' textAlign="center" color="white" marginBottom="40px">
                        <div>
                        - Mejorar la predicción de la plataforma EIE para determinar el consumo de energía y las emisiones en edificios residenciales y no residenciales del AMM.
                        </div>
                        <br/>
                        <div>
                        - Extender la aplicación de la plataforma EIE para evaluar el uso de tecnologías verdes en techos para disminuir el consumo de energía en edificios.
                        </div>
                    </Box>
                </Grid>
            </Grid>
            </Box>
        </Paper>
        </Container>
        <div className={classes.footer}>
            <Box fontSize={16} fontFamily='Tenor Sans' textAlign="center" color="black" marginTop="20px" marginBottom="20px" fontWeight="bold">
                Proyecto financiado por ICLEI-Gobiernos Locales por la Sustentabilidad, <br />
                Secretariado para México, Centroamérica y el Caribe, con recursos de Google.org <br/>
                en el marco del Proyecto Fondo de Acción México 2020
            </Box>
            <div className={classes.footersection}>
                <img src="https://javier.rodriguez.org.mx/itesm/2014/tecnologico-de-monterrey-blue.png" width="200px" height="52px" alt="logo" className={classes.logo}></img>
                <img src="sponsor1.jpg" width="188px" height="106px" alt="logo" className={classes.logo}></img>
                <img src="sponsor2.png" width="238px" height="52px" alt="logo" className={classes.logo}></img>
                <img src="sponsor3.jpg" width="197px" height="115px" alt="logo" className={classes.logo}></img>
            </div>
        </div>
        </div>
    );
}

export default HomeComponent; 