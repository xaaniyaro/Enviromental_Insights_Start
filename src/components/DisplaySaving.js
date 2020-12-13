import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    back:{
        backgroundColor: "#f35d46",
        height: "200px",
        width: "100%",
        marginBottom: "20px"
    },
    placeholder:{
        backgroundColor: "#e0e0e0",
        width: "100%",
        height: "200px",
        marginBottom: "20px"
    },
    centertext:{
        textAlign: "center"
    }
  }));

const DisplaySaving = ({insight, toggle}) => {
    const classes = useStyles();

    if(toggle){
        if(insight > 0){
            return(
                <div>
                    <Paper elevation={1} className={classes.back}>
                        <Box display="flex" justifyContent="center" flexDirection="row" flexWrap="wrap" p={2} fontSize={18} color="white">
                            <img src="buildings_icon.png" alt="icon" width="50%" height="50%" />
                            <div className={classes.centertext}>Consumo&nbsp;anual&nbsp;de</div> 
                            <strong>{insight}</strong> 
                            <div className={classes.centertext}>edificios de Monterrey</div>
                        </Box>
                    </Paper>
                </div>
            );
        }
        else{
            return(
                <Paper className={classes.placeholder}>

                </Paper>
            );
        }
    }
    
    else{
        if(insight > 0){
            return(
                <div>
                    <Paper elevation={1} className={classes.back}>
                        <Box display="flex" justifyContent="center" flexDirection="row" flexWrap="wrap" p={2} fontSize={18} color="white">
                            <img src="tree_icon.png" alt="icon" width="50%" height="50%"/>
                            <strong>{insight}</strong>
                            <div className={classes.centertext}>
                                hectáreas reforestadas
                            </div>
                        </Box>
                        
                    </Paper>
                </div>
            );
        }
        else{
            return(
                <Paper className={classes.placeholder}>

                </Paper>
            );
        }
    }
}

export default DisplaySaving;