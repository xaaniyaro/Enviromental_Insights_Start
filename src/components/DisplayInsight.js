import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    back:{
        backgroundColor: "#f35d46",
        height: "80px",
        width: "100%",
        marginBottom: "20px"
    },
    placeholder:{
        backgroundColor: "#e0e0e0",
        width: "100%",
        height: "80px",
        marginBottom: "20px"
    },
    imgFormat:{
        marginRight: "20px"
    },
    centertext:{
        textAlign: "center"
    }
  }));

const DisplayInsight = ({insight, toggle, mil}) => {
    const classes = useStyles();

    if(toggle){
        if(insight > 0){
            return(
                <div>
                    <Paper elevation={1} className={classes.back}>
                        <Box display="flex"  p={2} fontSize={16} color="white">
                            <img src="buildings_icon.png" alt="icon" width="20%" height="20%" className={classes.imgFormat}/>
                            <div className={classes.centertext}>
                                Consumo anual de <strong>{insight.toLocaleString()}</strong> departamentos de Monterrey
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
    
    else{
        if(insight > 0){
            if(mil){
                return(
                    <div>
                        <Paper elevation={1} className={classes.back}>
                        <Box display="flex"  p={2} fontSize={16} color="white">
                                <img src="tree_icon.png" alt="icon" width="20%" height="20%"/>
                                <div className={classes.centertext}>
                                    <strong>{insight.toLocaleString()}</strong> miles de árboles plantados
                                </div>
                            </Box>
                            
                        </Paper>
                    </div>
                );
            }
            else{
                return(
                    <div>
                        <Paper elevation={1} className={classes.back}>
                        <Box display="flex"  p={2} fontSize={16} color="white">
                                <img src="tree_icon.png" alt="icon" width="20%" height="20%"/>
                                <div className={classes.centertext}>
                                    <strong>{insight.toLocaleString()}</strong> millones de árboles plantados
                                </div>
                            </Box>
                            
                        </Paper>
                    </div>
                );
            }
            
        }
        else{
            return(
                <Paper className={classes.placeholder}>

                </Paper>
            );
        }
    }
}

export default DisplayInsight;