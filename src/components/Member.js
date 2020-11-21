import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    imgFormat: {
        borderRadius: '50%',
        height: '240px',
        width: '240px'
    },
    centered: {
        display: 'flex',
        justifyContent: 'center'
    }
    
  }));

const Member = () => {
    const classes = useStyles();

    return(
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} className={classes.centered}>
                    <img src="picture.png" className={classes.imgFormat} />
                </Grid>
                <Grid item xs={12} sm={12} >
                    <Typography variant="h4" gutterBottom>
                        Nombre del integrante
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Typography variant="subtitle1" gutterBottom>
                    Datos de contacto, rol en el proyecto, etc...
                    </Typography>
                </Grid>
            </Grid>
            

        </div>
    );
}

export default Member;