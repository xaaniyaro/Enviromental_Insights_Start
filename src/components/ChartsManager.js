import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Charts from './Charts';
import DropdownPlace from './DropdownPlace';
import Typography from '@material-ui/core/Typography';

const options = [
    {
        "label" : "Casa solar",
        "value" : "CS"
    },
    {
        "label" : "Guadalupe",
        "value" : "GPE"
    }
]

const data1 = [
    {name: 'Ene', Wh: 94.93},
    {name: 'Feb', Wh: 79.52},
    {name: 'Mar', Wh: 153.18},
    {name: 'Abr', Wh: 137.73},
    {name: 'May', Wh: 174.71},
    {name: 'Jun', Wh: 178.46},
    {name: 'Jul', Wh: 193.54},
    {name: 'Ago', Wh: 193.14},
    {name: 'Sep', Wh: 119.45},
    {name: 'Oct', Wh: 105.22},
    {name: 'Nov', Wh: 83.58},
    {name: 'Dic', Wh: 91.26}
];

const data2 = [
    {name: 'Ene', Wh: 106.29},
    {name: 'Feb', Wh: 93.60},
    {name: 'Mar', Wh: 174.12},
    {name: 'Abr', Wh: 161.22},
    {name: 'May', Wh: 198.87},
    {name: 'Jun', Wh: 200.37},
    {name: 'Jul', Wh: 220.88},
    {name: 'Ago', Wh: 214.15},
    {name: 'Sep', Wh: 136.85},
    {name: 'Oct', Wh: 114.59},
    {name: 'Nov', Wh: 102.84},
    {name: 'Dic', Wh: 106.03}
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
    const [selected, setSelected] = useState(options[0]);

    return(
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <DropdownPlace
                        options={options}
                        selected={selected}
                        onSelectedChange={setSelected}
                        label="Selecciona estación"></DropdownPlace>
                </Grid>
                <Grid item xs={4} className={classes.chartsSection}>
                    <Charts
                    data={data1}
                    ></Charts>
                    <Charts
                    data={data2}></Charts>
                </Grid>
                <Grid item xs={8}>
                    <Paper elevation={2} className={classes.paper}></Paper>
                </Grid>
                <Grid item xs={12} className={classes.mapSection}>
                    <Typography variant="h4" gutterBottom>
                        Mapa completo
                    </Typography>
                    <iframe className={classes.mapframe} src="https://www.google.com/maps/d/u/1/embed?mid=1b6KEEkwvDiTquRcPP9TjbfQ38sDjUA4Q" width="100%" height="720"></iframe>
                </Grid>
                
        </Grid>
        </div>
    );
};

export default ChartsManager;