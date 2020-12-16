import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import MemberView from './MemberView';
import Box from '@material-ui/core/Box';
import ContactForm from './ContactForm';

const useStyles = makeStyles(theme => ({
    photos: {
        height: '120px',
        width: '120px'
    },
    footer:{
        backgroundColor: "#e7ebf6",
        height: "300px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: '50px'
    },
  }));

const Member = () => {
    const classes = useStyles();

    return(
        <div>
            <Container>
                <Box display="flex" justifyContent="center" m={1} fontFamily="Tenor Sans" fontWeight="bold" fontSize={30} marginTop="30px">
                        Equipo de trabajo
                </Box>   
                
                <Grid container spacing={2}>
                <Grid item xs ={12} sm={6}>
                    <MemberView imgSrc="carlos.png" nombre="Dr. Carlos Iván Rivera Solorio" puesto="Responsable Potencial Solar" size="30" desc="subtitle1"></MemberView>
                </Grid>
                <Grid item xs ={12} sm={6}>
                    <MemberView imgSrc="gijon.png" nombre="Dr. Miguel Ángel Gijón Rivera" puesto="Responsable Edificios Sustentables" size="30" desc="subtitle1"></MemberView>
                </Grid>
                <Grid item xs={12} sm= {4}>
                    <MemberView imgSrc="ivan.png" nombre="Ph.D(c) Iván Acosta Pazmiño" puesto="Coordinador Potencial Solar" size="24" desc="subtitle2"></MemberView>
                </Grid>
                <Grid item xs={12} sm= {4}>
                    <MemberView imgSrc="caribay.png" nombre="Ph.D(c) Caribay Godoy Rangel" puesto="Coordinadora Edificios Sustentables" size="24" desc="subtitle2"></MemberView>
                </Grid>
                <Grid item xs={12} sm= {4}>
                    <MemberView imgSrc="jorge.png" nombre="Msc. Jorge Alfonso Tirado" puesto="Especialista de proyecto" size="24" desc="subtitle2"></MemberView>
                </Grid>
                <Grid item xs={12} sm= {4}>
                    <MemberView imgSrc="niloufar.png" nombre="Arq. Niloufar Mousavi" puesto="Estudiante Maestría MCI" size="24" desc="subtitle2"></MemberView>
                </Grid>
                <Grid item xs={12} sm= {4}>
                    <MemberView imgSrc="santiago.png" nombre="Santiago Romo Gallego" puesto="Estudiante IME" size="24" desc="subtitle2"></MemberView>
                </Grid>
                <Grid item xs={12} sm= {4}>
                    <MemberView imgSrc="diana.png" nombre="Diana Rosete Taboada" puesto="Estudiante IMA" size="24" desc="subtitle2"></MemberView>
                </Grid>
                <Grid item xs={12} sm= {4}>
                    <MemberView imgSrc="luis.png" nombre="Luis Almanza Vazquez" puesto="Estudiante IMT" size="24" desc="subtitle2"></MemberView>
                </Grid>
                <Grid item xs={12} sm= {4}>
                <MemberView imgSrc="juande.png" nombre="Juan de Dios Martínez" puesto="Estudiante IME" size="24" desc="subtitle2"></MemberView>
                </Grid>
                <Grid item xs={12} sm= {4}>
                    <MemberView imgSrc="ivann.png" nombre="Iván Contreras Rodríguez" puesto="Estudiante ITC" size="24" desc="subtitle2"></MemberView>
                </Grid>
            </Grid>
            </Container>
            <div className={classes.footer}>
                <ContactForm />
            </div>
        </div>
    );
}

export default Member;