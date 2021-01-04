import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TeamComponent from './TeamComponent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container:{
        marginTop: 30
    },
    paper: {
        padding: theme.spacing(2),
    }
    
  }));

const TeamContent = () => {
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12}>
                    <Paper elevation={3} className={classes.paper}>
                        <TeamComponent />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Paper elevation={3} className={classes.paper}>
                        <TeamComponent />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default TeamContent;