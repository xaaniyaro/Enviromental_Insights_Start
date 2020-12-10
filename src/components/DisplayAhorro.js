import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

/*const iconList = [
    { name: "panel.png"},
    { name: "hybrid.png"},
    { name: "termic.png"}
]*/

/*
const useStyles = makeStyles(theme => ({
    //Estas son del panel.png
    helpImg: {
        width: "50%",
        height: "50%"
    }
  }));*/

const DisplayAhorro = ({ ahorro, evitados }) => {
    //const classes = useStyles();

    if( ahorro <= 0 || evitados <= 0 ){
        return(
            <div>
                <Paper>
                    <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                            <Box display="flex" justifyContent="center" p={1}>
                                <Typography variant="h6">
                                    Resumen
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Typography gutterBottom variant="body1" align="center">
                                Intenta cambiar los parámetros
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
    else{
        return(
            <div>
                <Paper>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <Box display="flex" justifyContent="center" p={1}>
                                <Typography gutterBottom variant="h6">
                                    Resumen
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Typography variant="subtitle1" align="center">
                                GEI emitidos (sin tecnología)
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Box display="flex" justifyContent="center">
                                <Typography variant="subtitle2">
                                    100 tCO2 
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Typography variant="subtitle1" align="center">
                                GEI emitidos (con tecnología)
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Box display="flex" justifyContent="center">
                                <Typography variant="subtitle2">
                                    80 tCO2 
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                                <Typography variant="subtitle2" align="center">
                                    GEI evitados
                                </Typography>
                                <Typography gutterBottom variant="body2" align="center">
                                    20 tCO2 
                                </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
    
}

export default DisplayAhorro;