import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    fontStyle: {
        color: "white"
    },
    heatBack: {
        backgroundColor: "#FF0000",
        width: "100%",
        height: "100%"
    },
    electricBack: {
        backgroundColor: "#004783",
        width: "100%",
        height: "100%"
    },
  }));

const DisplayEnergy = ({choice, units, result}) => {
    const classes = useStyles();

    if(choice){
        if(result > 0){
            return(
                <div>
                    <Paper className={classes.electricBack}>
                        <Grid container alignItems="center">
                            <Grid item xs={12} sm={3}>
                                <Box display="flex" justifyContent="flex-start" p={2}>
                                    <img src="electricy_white.png" width="26px" height="50px" alt="icon"/>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <Box display="flex" justifyContent="center" p={2}>
                                    <Typography variant="subtitle2" className={classes.fontStyle}>
                                        {result.toLocaleString()} {units}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            );
        }
        else{
            return null;
        }
    }
    else{
        if(result > 0){
            return(
                <div>
                    <Paper className={classes.heatBack}>
                        <Grid container alignItems="center">
                                <Grid item xs={12} sm={3}>
                                    <Box display="flex" justifyContent="flex-start" p={2}>
                                        <img src="heat_white.png" width="42px" height="50px" alt="icon"/>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <Box display="flex" justifyContent="center" p={2}>
                                    <Typography variant="subtitle2" className={classes.fontStyle}>
                                        {result.toLocaleString()} {units}
                                    </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                    </Paper>
                </div>
            );
        }
        else{
            return null;
        }
    }
    
}

export default DisplayEnergy;