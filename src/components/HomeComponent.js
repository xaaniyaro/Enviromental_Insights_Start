import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Carousel from './Carousel';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    section: {
        marginTop: '30px'
    }
  }));

const HomeComponent = () => {
    const classes = useStyles();

    return(
        <div>
        <Carousel></Carousel>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} className={classes.section}>
                    <Typography variant="h4" gutterBottom>
                        Nuestros aliados
                    </Typography> 
                </Grid>
                <Grid item xs={12} sm={12}>
                    
                </Grid>
            </Grid>
        </div>
    );
}

export default HomeComponent; 