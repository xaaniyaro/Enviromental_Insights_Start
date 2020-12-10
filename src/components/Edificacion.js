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
import DisplayEdif from './DisplayEdif';

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



const Edificacion = ( {edif, residencial, noresidencial} ) => {
    const classes = useStyles();

    const [selected, setSelected] = React.useState('');
    const [selectedE, setSelectedE] = React.useState('');
    const [selectedH, setSelectedH] = React.useState('');
    const [selectedEUI, setSelectedEUI] = React.useState('');
    const [selectedFactor, setSelectedFactor] = React.useState('');
    const [resultE, setResultE] = React.useState('');
    const [resultH, setResultH] = React.useState('');
    const [gei, setGei] = React.useState(0);
    const [area, setArea] = React.useState(0);

    const handleOption = (optionValue) => {
        setSelected(optionValue)
    }

    const handleArea = (areaValue) =>{
        setArea(areaValue);
    }

    useEffect( () =>{
        const calculateResults = () => {
            let calcuE = area * selectedEUI * (selectedE/100) ;
            setResultE(parseFloat(calcuE.toFixed(2)));
            let calcuH = area * selectedEUI * (selectedH/100);
            setResultH(parseFloat(calcuH.toFixed(2)));
        }
        const calculateGei = () => {
            let calc = selectedFactor * area;
            setGei(parseFloat(calc.toFixed(2)));
        }
        calculateResults();
        calculateGei();
    }, [selectedE, selectedH, selectedEUI, selectedFactor, area]);

    const handleEdifType = (edifValue) =>{
        let arr = edifValue.split(",");
        setSelectedEUI(parseFloat(arr[0]));
        setSelectedE(parseFloat(arr[1]));
        setSelectedH(parseFloat(arr[2]));
        setSelectedFactor(parseFloat(arr[3]));
    }

    function reset() {
        setSelected('');
        setSelectedE('');
        setSelectedH('');
        setSelectedEUI('');
        setSelectedFactor('');
        setResultE('');
        setResultH('');
        setGei('');
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
                        <Box display="flex" justifyContent="center">
                            < TestSelect options={edif} label="Tipo de edificio" selected={selected} onSelectedChange={handleOption}/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Box display="flex" justifyContent="center">
                            <DisplayEdif selectedEdif={selected} onEdifChange={handleEdifType} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Box display="flex" justifyContent="center">
                            <AreaInput onValueChange={handleArea} areaValue={area} idInput="input1" idHelper="input1-helper"/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography variant="body1">
                            *Cálculos para Monterrey, México
                        </Typography>
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
                        units="kWh/año" 
                        result={resultE}>
                        </DisplayEnergy>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DisplayEnergy 
                        choice={false} 
                        units="MJ/año" 
                        result={resultH}>
                        </DisplayEnergy>
                    </Grid>
                </Grid>
                
            </Grid>
            <Grid item xs={12} sm={2}>
                <DisplayConsumo gei={gei} percentageE={selectedE} percentageH={selectedH}/>
            </Grid>
        </Grid>
        </Box>
        </Paper>
        </div>
    );
}

export default Edificacion;