import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider'

/*const iconList = [
    { name: "panel.png"},
    { name: "hybrid.png"},
    { name: "termic.png"}
]*/


const useStyles = makeStyles(theme => ({
    //Estas son del panel.png
    section: {
        marginTop: '10px'
    }
  }));

const DisplayConsumo = ({ gei, percentageE, percentageH }) => {
    const classes = useStyles();

    if( gei > 0){
        return(
            <div>
                <Paper>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <Box display="flex" justifyContent="center" textAlign="center" fontSize={20} fontWeight="bold" p={2}>
                                Resumen
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Grid container spacing={1}>
                                    <Grid item xs={12} sm={6}>
                                        <Box display="flex" justifyContent="center">
                                        <img src="electricity.png" alt="icon" width="20px" height="40px" />   
                                        </Box>
                                    </Grid> 
                                    <Grid item xs={12} sm={6}>
                                        <Box display="flex"  justifyContent="flex-start" p={1} fontWeight="bold">
                                            {percentageE} %
                                        </Box>
                                    </Grid>
                            </Grid>           
                        </Grid>
                        <Grid item xs={12} sm={12}>
                        <Divider variant="middle" />
                            <Grid container spacing={1} className={classes.section}>
                                <Grid item xs={12} sm={6}>
                                    <Box display="flex"  justifyContent="center">
                                    <img src="heat.png" alt="icon" width="33px" height="40px" />
                                    </Box>
                                </Grid> 
                                <Grid item xs={12} sm={6}>
                                    <Box display="flex"  justifyContent="flex-start" p={1} fontWeight="bold">
                                        {percentageH} %
                                    </Box>
                                </Grid>
                            </Grid>         
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
                                    {gei.toLocaleString()} tCO2
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
                    <Box display="flex" justifyContent="center" textAlign="center" fontSize={20} fontWeight="bold" p={2}>
                        Resumen
                    </Box>
                    <Box display="flex" justifyContent="center" textAlign="center" fontSize={16} p={2}>
                        Intenta cambiar los parámetros
                    </Box>
                </Paper>
            </div>
        );   
    }
    
}

export default DisplayConsumo;