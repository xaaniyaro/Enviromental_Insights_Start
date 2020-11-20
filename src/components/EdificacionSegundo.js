import React from 'react';
import Grid from '@material-ui/core/Grid';
import AreaInput from './AreaInput';
import TestSelect from './TestSelect';
import Paper from '@material-ui/core/Paper';
import SegundoCalc from './SegundoCalc';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    placeholder: {
        backgroundColor: '#f5f5f5',
        minWidth: 120,
        minHeight: 80
    },
    
  }));

const EdificacionSegundo = ({edif, tech, temp}) =>{
    
    const classes = useStyles();

    const [selectedEdif, setSelectedEdif] = React.useState('');
    const [selectedTech, setSelectedTech] = React.useState('');
    const [selectedTemp, setSelectedTemp] = React.useState('');
    const [area, setArea] = React.useState(0);

    const handleOptionEdif = (optionValue) => {
        setSelectedEdif(optionValue);
    }

    const handleOptionTech = (optionValue) => {
        setSelectedTech(optionValue);
    }

    const handleOptionTemp = (optionValue) => {
        setSelectedTemp(optionValue);
    }

    const handleArea = (areaValue) =>{
        setArea(areaValue);
    }

    return(
        <div>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
                <Grid container>
                        <Grid item xs={12} sm={12}>
                            < TestSelect options={edif} label="Tipo de edificación" selected={selectedEdif} onSelectedChange={handleOptionEdif}/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            < TestSelect options={tech} label="Tipo de tecnología" selected={selectedTech} onSelectedChange={handleOptionTech}/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            < TestSelect options={temp} label="Temporada" selected={selectedTemp} onSelectedChange={handleOptionTemp}/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <AreaInput onValueChange={handleArea} areaValue={area} idInput="input2" idHelper="input2-helper"/>
                        </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={9}>
                <SegundoCalc></SegundoCalc>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Paper elevation={3} className={classes.placeholder}>

                </Paper>
            </Grid>
        </Grid>
        </div>
    );
}

export default EdificacionSegundo