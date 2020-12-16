import React, { useState } from 'react';
//import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SelectComponent from './SelectComponent';
import DisplayMap from './DisplayMap';
import DisplayGraphs from './DisplayGraphs';

const options = [
    { "Casa solar": ["cs","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.523444039503!2d-100.29087618498123!3d25.653937483685702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s75QXMP36%2BHG!5e0!3m2!1sen!2smx!4v1606438557996!5m2!1sen!2smx"]},
    { "Guadalupe": ["gp","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.0018990998383!2d-100.36975118498155!3d25.638062483693027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s75QXJJQJ%2B6X!5e0!3m2!1sen!2smx!4v1607930169118!5m2!1sen!2smx"]}
    /*
    { "San Nicolás": ["sn","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.8132858218914!2d-100.28500118497944!3d25.743687483644937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s75QXPPV8%2BFV!5e0!3m2!1sen!2smx!4v1606438845466!5m2!1sen!2smx"]},
    { "Santa Catarina": ["sc","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.3199227960954!2d-100.4325011849811!3d25.66068748368282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s75QXMH69%2B7V!5e0!3m2!1sen!2smx!4v1606438647820!5m2!1sen!2smx"]},
    { "PIIT": ["pi","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.162746230785!2d-100.12575118497897!3d25.76518748363515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s75QXQV8G%2B3H!5e0!3m2!1sen!2smx!4v1606438731493!5m2!1sen!2smx"]},
    { "Cumbres" : ["cm","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.115689960202!2d-100.41875118497963!3d25.733687483649508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s75QXPHMM%2BF9!5e0!3m2!1sen!2smx!4v1606438784288!5m2!1sen!2smx"]},
    { "Contry": ["co","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.4838421168556!2d-100.27712618498194!3d25.62206248370024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s75QXJPCG%2BR2!5e0!3m2!1sen!2smx!4v1606439076792!5m2!1sen!2smx"]}
    */
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

    const [selected, setSelected] = useState('');
    const [selectedSta, setSelectedSta] = useState('');
    const [selectedMap, setSelectedMap] = useState('');

    const handleOption = (optionValue) => {
        let arr = optionValue.split(',');
        setSelected(optionValue);
        setSelectedSta(arr[0]);
        setSelectedMap(arr[1]);
    }


    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                <Paper elevation={1}>
                    <Box p={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <Box fontSize={28}>
                                    Datos históricos de irrandiancia horizontal global (GHI)
                                </Box>
                            </Grid> 
                            <Grid item xs={12} sm={12}>
                                <SelectComponent options={options} label={"Estación"} selected={selected} onSelectedChange={handleOption} />
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <DisplayGraphs selected={selectedSta}/>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <DisplayMap srcString={selectedMap} />
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Paper elevation={1}>
                        <Box p={2}>
                            <Typography variant="h4" gutterBottom>
                                Mapa completo de las estaciones
                            </Typography>
                            <iframe className={classes.mapframe} title="completemap" src="https://www.google.com/maps/d/u/1/embed?mid=1b6KEEkwvDiTquRcPP9TjbfQ38sDjUA4Q" width="100%" height="720"></iframe>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default ChartsManager;