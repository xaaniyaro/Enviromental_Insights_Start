import React, {useState, useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InfoDialogue from './InfoDialogue';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  infoIcon: {
      display: 'flex',
      justifyContent: 'flex-end'
  }
  }));

const SectionHeader = ({title}) => {

    const classes = useStyles();

    return(
        <div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={10}>
                <Typography variant="h4" gutterBottom>
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2} className={classes.infoIcon}>
                <InfoDialogue></InfoDialogue>
              </Grid>
            </Grid>
        </div>
    );
}

export default SectionHeader;