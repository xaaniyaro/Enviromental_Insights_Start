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

const DisplayConsumo = ({ sum }) => {
    //const classes = useStyles();

    if( sum < 0){
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
                            <Box display="flex" justifyContent="center" marginTop="10px">
                                <Typography variant="subtitle1">
                                Total GEI emitidos
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Box display="flex" justifyContent="center">
                                <Typography variant="subtitle2">
                                    0 tCO2
                                </Typography>
                            </Box>
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
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12}>
                            <Box display="flex" justifyContent="center" p={1}>
                                <Typography variant="h6">
                                    Resumen
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Box display="flex" justifyContent="center" marginTop="10px">
                                <Typography variant="subtitle1">
                                Total GEI emitidos
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Box display="flex" justifyContent="center">
                                <Typography variant="subtitle2">
                                    {sum} tCO2
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
    
}

export default DisplayConsumo;