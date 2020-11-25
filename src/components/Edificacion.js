import React from 'react';
import Grid from '@material-ui/core/Grid';
import AreaInput from './AreaInput';
import TestSelect from './TestSelect';
import Paper from '@material-ui/core/Paper';
import EdificioCalc from './EdificioCalc';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    results: {
        marginTop: 10
    },
    firstSection: {
        backgroundColor: '#f5f5f5'
    },
    placeholder: {
        backgroundColor: '#f5f5f5',
        minWidth: 120,
        minHeight: 80
    }
  }));

const Edificacion = ({edif}) => {

    const classes = useStyles();

    const [selected, setSelected] = React.useState('');
    const [area, setArea] = React.useState(0);

    const handleOption = (optionValue) => {
        setSelected(optionValue);
    }

    const handleArea = (areaValue) =>{
        setArea(areaValue);
    }


    return(
        
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={3}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12}>
                            < TestSelect options={edif} label="Tipo de edificación" selected={selected} onSelectedChange={handleOption}/>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                            <AreaInput onValueChange={handleArea} areaValue={area} idInput="input1" idHelper="input1-helper"/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <div className={classes.results}>
                        <Paper elevation={3} className={classes.firstSection}>
                            <EdificioCalc></EdificioCalc>
                        </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        
                    </Grid>
                </Grid>
        
    );
}

export default Edificacion;