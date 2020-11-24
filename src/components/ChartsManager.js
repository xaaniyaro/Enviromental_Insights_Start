import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Charts from './Charts';
import Typography from '@material-ui/core/Typography';

/*
const options = [
    {
        "label" : "Casa solar",
        "value" : "CS"
    },
    {
        "label" : "Guadalupe",
        "value" : "GPE"
    }
]*/

const data1 = [
    {name: 'Ene', wattshporaño: 94.93},
    {name: 'Feb', wattshporaño: 79.52},
    {name: 'Mar', wattshporaño: 153.18},
    {name: 'Abr', wattshporaño: 137.73},
    {name: 'May', wattshporaño: 174.71},
    {name: 'Jun', wattshporaño: 178.46},
    {name: 'Jul', wattshporaño: 193.54},
    {name: 'Ago', wattshporaño: 193.14},
    {name: 'Sep', wattshporaño: 119.45},
    {name: 'Oct', wattshporaño: 105.22},
    {name: 'Nov', wattshporaño: 83.58},
    {name: 'Dic', wattshporaño: 91.26}
];

const data2 = [
    {name: 'Ene', wattshporaño: 106.29},
    {name: 'Feb', wattshporaño: 93.60},
    {name: 'Mar', wattshporaño: 174.12},
    {name: 'Abr', wattshporaño: 161.22},
    {name: 'May', wattshporaño: 198.87},
    {name: 'Jun', wattshporaño: 200.37},
    {name: 'Jul', wattshporaño: 220.88},
    {name: 'Ago', wattshporaño: 214.15},
    {name: 'Sep', wattshporaño: 136.85},
    {name: 'Oct', wattshporaño: 114.59},
    {name: 'Nov', wattshporaño: 102.84},
    {name: 'Dic', wattshporaño: 106.03}
];

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '60px'
    },
    paper: {
        padding: theme.spacing(2),
        minWidth: '100%',
        minHeight: '100%'
    },
    mapSection: {
        marginTop: '50px'
    },
    chartsSection: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    }
  }));

const ChartsManager = () =>{
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <Charts
                    data={data2}></Charts>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.chartsSection}>
                    <Charts
                    data={data1}
                    ></Charts>
                    
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Paper elevation={2} className={classes.paper}></Paper>
                </Grid>
                <Grid item xs={12} className={classes.mapSection}>
                    <Typography variant="h4" gutterBottom>
                        Mapa completo
                    </Typography>
                    <iframe className={classes.mapframe} title="completemap" src="https://www.google.com/maps/d/u/1/embed?mid=1b6KEEkwvDiTquRcPP9TjbfQ38sDjUA4Q" width="100%" height="720"></iframe>
                </Grid>
                <Grid item xs={12}>
<iframe className={classes.mapframe} src="https://www.google.com/maps/d/u/1/embed?mid=1b6KEEkwvDiTquRcPP9TjbfQ38sDjUA4Q" width="1280" height="720"></iframe>
</Grid>
        </Grid>
        </div>
    );
};

export default ChartsManager;