import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

/*const iconList = [
    { name: "panel.png"},
    { name: "hybrid.png"},
    { name: "termic.png"}
]*/

/*
const useStyles = makeStyles(theme => ({
    //Estas son del panel.png
    section: {
        marginTop: '10px'
    }
  }));
  */

const DisplayAhorro = ({ ahorro }) => {
    //const classes = useStyles();

    if( ahorro > 0){
        return(
            <div>
                <Paper>
                    <Box display="flex" justifyContent="center" textAlign="center" fontSize={20} fontWeight="bold" p={2}>
                        Porcentaje de ahorro
                    </Box>
                    <Box display="flex" justifyContent="center" textAlign="center" fontSize={16} p={2}>
                        {ahorro.toLocaleString()} %
                    </Box>
                </Paper>
            </div>
            );
    }
    else{
        return(
            <div>
                <Paper>
                    <Box display="flex" justifyContent="center" textAlign="center" fontSize={20} fontWeight="bold" p={2}>
                        Porcentaje de ahorro
                    </Box>
                    <Box display="flex" justifyContent="center" textAlign="center" fontSize={16} p={2}>
                        Intenta cambiar los parámetros
                    </Box>
                    
                </Paper>
            </div>
        );
    }
    
}

export default DisplayAhorro;