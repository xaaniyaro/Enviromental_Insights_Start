import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MemberView from './MemberView';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    photos: {
        height: '120px',
        width: '120px'
    },
    header: {
        marginTop: '20px'
    }
    
  }));

const Member = () => {
    const classes = useStyles();

    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} className={classes.header}>
                    <Box display="flex" justifyContent="center" m={1}>
                        <Typography variant="h4" gutterBottom>
                         Equipo de trabajo
                        </Typography>
                    </Box>   
                </Grid>
                <Grid item xs ={12} sm={6}>
                    <MemberView imgSrc="carlos.png" nombre="Dr. Carlos Iván Rivera Solorio" puesto="Responsable Potencial Solar" title="h5" desc="subtitle1"></MemberView>
                </Grid>
                <Grid item xs ={12} sm={6}>
                    <MemberView imgSrc="gijon.png" nombre="Dr. Miguel Ángel Gijón Rivera" puesto="Responsable Edificios Sustentables" title="h5" desc="subtitle1"></MemberView>
                </Grid>
                <Grid item xs={12} sm= {4}>
                    <MemberView imgSrc="ivan.png" nombre="Msc. Ivan Acosta Pazmiño" puesto="Coordinador Potencial Solar" title="h6" desc="subtitle2"></MemberView>
                </Grid>
                <Grid item xs={12} sm= {4}>
                    <MemberView imgSrc="caribay.png" nombre="Msc. Caribay Godoy Rangel" puesto="Coordinadora Edificios Sustentables" title="h6" desc="subtitle2"></MemberView>
                </Grid>
                <Grid item xs={12} sm= {4}>
                    <MemberView imgSrc="jorge.png" nombre="Msc. Jorge Alfonso Tirado" puesto="Profesionista" title="h6" desc="subtitle2"></MemberView>
                </Grid>
                <Grid item xs={12} sm= {2}>
                    <MemberView imgSrc="niloufar.png" nombre="Arq. Niloufar Mousavi" puesto="Estudiante maestría" title="h6" desc="subtitle2"></MemberView>
                </Grid>
                <Grid item xs={12} sm= {2}>
                    <MemberView imgSrc="santiago.png" nombre="Santiago Romo Gallego" puesto="Estudiante IME" title="h6" desc="subtitle2"></MemberView>
                </Grid>
                <Grid item xs={12} sm= {2}>
                    <MemberView imgSrc="diana.png" nombre="Diana Rosete Taboada" puesto="Estudiante IMA" title="h6" desc="subtitle2"></MemberView>
                </Grid>
                <Grid item xs={12} sm= {2}>
                    <MemberView imgSrc="luis.png" nombre="Luis Almanza Vazquez" puesto="Estudiante IMT" title="h6" desc="subtitle2"></MemberView>
                </Grid>
                <Grid item xs={12} sm= {2}>
                <MemberView imgSrc="juande.png" nombre="Juan de Dios Martínez" puesto="Estudiante IME" title="h6" desc="subtitle2"></MemberView>
                </Grid>
                <Grid item xs={12} sm= {2}>
                    <MemberView imgSrc="ivann.png" nombre="Iván Contreras Rodríguez" puesto="Estudiante ITC" title="h6" desc="subtitle2"></MemberView>
                </Grid>
            </Grid>
        </div>
    );
}

export default Member;