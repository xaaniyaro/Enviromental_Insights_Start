import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import AreaInput from './AreaInput';
import TestSelect from './TestSelect';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import DisplayConsumo from './DisplayConsumo';
import DisplayEnergy from './DisplayEnergy';

const useStyles = makeStyles(theme => ({
    results: {
        marginTop: 10
    },
    firstSection: {
        backgroundColor: '#f5f5f5'
    },
    placeholder: {
        backgroundColor: '#f5f5f5',
        width: "100%",
        height: "100%"
    },
    backPaper: {
        marginTop: '30px'
    },
    electricBack: {
        backgroundColor: "#004783",
        width: "100%",
        height: "100%"
    },
    electricR: {
        color: "white"
    },
    heatBack: {
        backgroundColor: "#FF0000",
        width: "100%",
        height: "100%"
    },
    heatR: {
        color: "white"
    },
    helpImg: {
        width: "116px",
        height: "60px"
    }
  }));



const Edificacion = ( {edif} ) => {
    const classes = useStyles();

    const [selected, setSelected] = React.useState('');
    const [selectedE, setSelectedE] = React.useState('');
    const [selectedH, setSelectedH] = React.useState('');
    const [resultE, setResultE] = React.useState('');
    const [resultH, setResultH] = React.useState('');
    const [sumR, setSumR] = React.useState(0);
    const [percentageE, setPercentageE] = React.useState(0);
    const [percentageH, setPercentageH] = React.useState(0);
    const [area, setArea] = React.useState(0);

    const handleOption = (optionValue) => {
        setSelected(optionValue);
        let arr = optionValue.split(',');
        setSelectedE(arr[0]);
        setSelectedH(arr[1]);
    }

    const handleArea = (areaValue) =>{
        setArea(areaValue);
    }

    useEffect( () =>{
        const calculateResults = () => {
            let calcuE = selectedE * area;
            setResultE(calcuE.toFixed(2));
            let calcuH = selectedH * area;
            setResultH(calcuH.toFixed(2));
        }
        calculateResults();
    }, [selectedE, selectedH, area]);

    useEffect( () =>{
        const calculateSum = () => {
            let sum = parseFloat(resultE) + parseFloat(resultH);
            setSumR(sum);
        }
        calculateSum();
    }, [resultE, resultH]);

    useEffect( () =>{
        const calculateP = () => {
            if(sumR > 0){
                let eP = 100 * resultE /sumR;
                setPercentageE(eP.toFixed(2));
                let eH = 100 * resultH /sumR;
                setPercentageH(eH.toFixed(2));
            }
        }
        calculateP();
    }, [resultH, resultE, sumR]);

    function reset() {
        setSelected('');
        setSelectedE('');
        setSelectedH('');
        setPercentageE(0);
        setPercentageH(0);
        setSumR(0);
        setResultE('');
        setResultH('');
        setArea(0);
    }
    
    return(
        <div>
        <Paper elevation={1} className={classes.backPaper}>
            <Box p={2}>
        <Grid container spacing={3} justify="space-between">
            <Grid item xs={12} sm={9}>
                <Typography variant="h4" className={classes.header}>
                    Calculadora de emisiones de GEI
                </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Box display="flex" justifyContent="flex-end">
                    <Button variant="contained" onClick={reset}>Resetear</Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                        < TestSelect options={edif} label="Tipo de edificio" selected={selected} onSelectedChange={handleOption}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <AreaInput onValueChange={handleArea} areaValue={area} idInput="input1" idHelper="input1-helper"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={7}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <Typography variant="h5">
                            Consumo energético anual
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DisplayEnergy 
                        choice={true} 
                        units="MWh/AC" 
                        result={resultE}>
                        </DisplayEnergy>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DisplayEnergy 
                        choice={false} 
                        units="MWh" 
                        result={resultH}>
                        </DisplayEnergy>
                    </Grid>
                </Grid>
                
            </Grid>
            <Grid item xs={12} sm={2}>
                <DisplayConsumo percentageE={percentageE} percentageH={percentageH} sum={sumR} />
            </Grid>
        </Grid>
        </Box>
        </Paper>
        </div>
    );
}

export default Edificacion;