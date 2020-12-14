import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    fontStyle: {
        color: "white"
    },
    geiBack: {
        backgroundColor: "#616161",
        width: "100%",
        height: "80px"
    },
    electricBack: {
        backgroundColor: "#004783",
        width: "100%",
        height: "80px"
    },
    placeholder:{
        backgroundColor: "#e0e0e0",
        width: "100%",
        height: "80px"
    }
  }));

const DisplayCalcu = ({choice, units, result}) => {
    const classes = useStyles();

    if(choice){
        if(result > 0){
            return(
                <div>
                    <Paper className={classes.electricBack}>
                        <Box display="flex" justifyContent="space-around" alignItems="center" p={2} fontSize={18} color="white">
                            <img src="electricy_white.png" width="26px" height="50px" alt="icon"/>
                                {result.toLocaleString()} {units}
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
        if(result > 0){
            return(
                <div>
                    <Paper className={classes.geiBack}>
                        <Box display="flex" justifyContent="space-around" alignItems="center" p={2} fontSize={18} color="white">
                            <img src="emissions_icon.png" width="60px" height="50px" alt="icon"/>
                                {result.toLocaleString()} {units}
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

export default DisplayCalcu;