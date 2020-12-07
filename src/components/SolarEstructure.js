import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import AreaInput from './AreaInput';
import TestSelect from './TestSelect';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import DisplayEnergy from './DisplayEnergy';
import DisplayFuel from './DisplayFuel';
import DisplaySummary from './DisplaySummary';

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



const SolarEstruc = ( {tecnologia} ) => {
    const classes = useStyles();

    const [iconName, setIconName] = React.useState("placeholder.png");
    const [fuel, setFuel] = React.useState('');
    const [selected, setSelected] = React.useState('');
    const [selectedE, setSelectedE] = React.useState('');
    const [selectedH, setSelectedH] = React.useState('');
    const [selectedT, setSelectedT] = React.useState('');
    const [resultE, setResultE] = React.useState('');
    const [resultH, setResultH] = React.useState('');
    const [area, setArea] = React.useState(0);
    const [geiE, setGeiE] = React.useState('');
    const [geiH, setGeiH] = React.useState('');
    const [sumGei, setSumGei] = React.useState(0);

    const handleOption = (optionValue) => {
        setSelected(optionValue);
        let arr = optionValue.split(',');
        setSelectedT(arr[0]);
        setSelectedE(arr[1]);
        setSelectedH(arr[2]);
    }

    const handleArea = (areaValue) =>{
        setArea(areaValue);
    }

    const handleFuel = (fuelValue) =>{
        let val = parseFloat(fuelValue);
        setFuel(val);
    }

    useEffect( () =>{
        const calculateResults = () => {
            let calcuE = selectedE * area / 1000000;
            setResultE(calcuE.toFixed(2));
            let calcuH = selectedH * area / 1000000;
            setResultH(calcuH.toFixed(2));
        }
        const decideIcon = () => {
            if(selectedT === 'ct'){
                setIconName("termic.png")
            }
            else if(selectedT === 'pv'){
                setIconName("hybrid.png");
            }
            else if(selectedT === 'lc'){
                setIconName("https://www.solar-payback.com/wp-content/uploads/2017/07/parabolic-trough.jpg");
            }
            else if(selectedT === 'pf'){
                setIconName("https://www.solar-payback.com/wp-content/uploads/2017/07/flat-plate-collector.jpg");
            }
        }
        calculateResults();
        decideIcon();
    }, [selectedE, selectedH, area, selectedT]);

    useEffect( () =>{
        const calculateGei = () => {
            let calcGeiE = resultE * 1000000 * 0.0004536;
            setGeiE(calcGeiE.toFixed(2));
            let calcGeiH = resultH * 1000000 * fuel;
            setGeiH(calcGeiH.toFixed(2));
        }
        calculateGei();
    }, [resultE, resultH, fuel]);

    useEffect( () =>{
        const makeSum = () => {
            let sumG = parseFloat(geiE) + parseFloat(geiH);
            setSumGei(sumG);
        }
        makeSum();
    }, [geiE, geiH]);

    function reset() {
        setIconName('placeholder.png');
        setFuel('');
        setSelected('');
        setSelectedE('');
        setSelectedH('');
        setSelectedT('');
        setResultE('');
        setResultH('');
        setGeiE('');
        setGeiH('');
        setArea(0);
        setSumGei(0);
    }
    
    return(
        <div>
        <Paper elevation={1} className={classes.backPaper}>
            <Box p={2}>
        <Grid container spacing={3} justify="space-between">
            <Grid item xs={12} sm={9}>
                <Typography variant="h4" className={classes.header}>
                    Calculadora específica
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
                        < TestSelect options={tecnologia} label="Tecnología" selected={selected} onSelectedChange={handleOption}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <DisplayFuel selectedH={selectedH} onFuelChange={handleFuel} />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <AreaInput onValueChange={handleArea} areaValue={area} idInput="input2" idHelper="input2-helper"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={7}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <Typography variant="h5">
                            Producción energética anual
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
                    <Grid item xs={12} sm={12}>
                        <Typography variant="h5">
                            Reducción de emisiones de GEI
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DisplayEnergy 
                        choice={true} 
                        units="tCO2/año" 
                        result={geiE}>
                        </DisplayEnergy>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <DisplayEnergy 
                        choice={false} 
                        units="tCO2/año" 
                        result={geiH}>
                        </DisplayEnergy>
                    </Grid>
                </Grid>
                
            </Grid>
            <Grid item xs={12} sm={2}>
                <DisplaySummary sumG={sumGei} imgName={iconName}/>
            </Grid>
        </Grid>
        </Box>
        </Paper>
        </div>
    );
}

export default SolarEstruc;