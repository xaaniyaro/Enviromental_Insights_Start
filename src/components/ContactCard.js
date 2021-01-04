import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    back:{
        width: "500px",
        height: "170px"
    } 
  }));

const ContactCard = () => {
    const classes = useStyles();
    return(
        <div>
             <Paper elevation={1} className={classes.back}>
                 <Box  flexDirection="colum" p={2}>
                    <Box textAlign="center" fontSize={24} fontFamily="Tenor Sans" marginBottom={1}>
                        Contacto
                    </Box >
                    <Box textAlign="center" fontFamily="Tenor Sans" marginBottom={1}>
                        Email: miguel.gijon@tec.mx / rivera.carlos@tec.mx
                    </Box> 
                    <Box textAlign="center" fontFamily="Tenor Sans" marginBottom={1}>
                        Tel.: 81 83582000 ext.
                    </Box>
                    <Box textAlign="center">
                    <Button variant="contained" color="primary" marginBottom={1}>
                        <a href="mailto:miguel.gijon@tec.mx, rivera.carlos@tec.mx">Contactar ya</a>
                    </Button>
                    </Box>
                </Box>
             </Paper>
        </div>
    );
}

export default ContactCard;