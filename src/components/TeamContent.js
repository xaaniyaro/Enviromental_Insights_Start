import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Member from './Member';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container:{
        marginTop: 30
    }
    
  }));

const TeamContent = () => {
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                    <Member></Member>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Member></Member>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Member></Member>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Member></Member>
                </Grid>
            </Grid>
        </div>
    );
}

export default TeamContent;