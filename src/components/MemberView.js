import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    photos: {
        height: '120px',
        width: '120px'
    },
    paperBack: {
        backgroundColor: "#f5f5f5"
    }
  }));

const DoctorView = ({imgSrc, nombre, puesto, title, desc}) => {

    const classes = useStyles();

    return(
        <div>
            <Paper elevation={2} className={classes.paperBack}>
            <Box display="flex" justifyContent="center" m={1} p={1} >
                        <Box p={1}>
                            <img src={imgSrc} alt={imgSrc} className={classes.photos}></img>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="center" >
                            <Typography variant={title} gutterBottom>
                                {nombre}
                            </Typography>      
                    </Box>
                    <Box display="flex" justifyContent="center">  
                            <Typography variant={desc} gutterBottom >
                                {puesto}
                            </Typography>
                </Box>
                </Paper>
        </div>
    );
}

export default DoctorView;