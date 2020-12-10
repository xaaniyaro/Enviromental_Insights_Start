import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import AreaInput from './AreaInput';
import TestSelect from './TestSelect';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import DisplayAhorro from './DisplayAhorro';
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



const EdificacionSegundo = ( {edif, tech, temp} ) => {
    const classes = useStyles();

    const [selectedEdif, setSelectedEdif] = React.useState('');
    const [selectedEdifE, setSelectedEdifE] = React.useState('');
    const [selectedEdifH, setSelectedEdifH] = React.useState('');

    const [selectedTec, setSelectedTec] = React.useState('');
    const [selectedTecE, setSelectedTecE] = React.useState('');
    const [selectedTecH, setSelectedTecH] = React.useState('');

    const [selectedTem, setSelectedTem] = React.useState('');
    const [selectedTemE, setSelectedTemE] = React.useState('');
    const [selectedTemH, setSelectedTemH] = React.useState('');

    const [resultE, setResultE] = React.useState('');
    const [resultH, setResultH] = React.useState('');

    const [geiE, setGeiE] = React.useState('');
    const [geiH, setGeiH] = React.useState('');
    const [difC, setDifC] = React.useState(0);
    const [difE, setDifE] = React.useState(0);

    const [area, setArea] = React.useState(0);

    const handleOptionEdif = (optionValue) => {
        setSelectedEdif(optionValue);
        let arr = optionValue.split(',');
        setSelectedEdifE(arr[0]);
        setSelectedEdifH(arr[1]);
    }

    const handleOptionTec = (optionValue) => {
        setSelectedTec(optionValue);
        let arr = optionValue.split(',');
        setSelectedTecE(arr[0]);
        setSelectedTecH(arr[1]);
    }

    const handleOptionTem = (optionValue) => {
        setSelectedTem(optionValue);
        let arr = optionValue.split(',');
        setSelectedTemE(arr[0]);
        setSelectedTemH(arr[1]);
    }

    const handleArea = (areaValue) =>{
        setArea(areaValue);
    }

    useEffect( () =>{
        const calculateResults = () => {
            let calcuE = selectedEdifE * selectedTecE * selectedTemE * area;
            setResultE(calcuE.toFixed(2));
            let calcuH = selectedEdifH * selectedTecH * selectedTemH * area;
            setResultH(calcuH.toFixed(2));
        }
        calculateResults();
    }, [selectedEdifE, selectedEdifH, selectedTecE, selectedTecH, selectedTemE, selectedTemH, area]);

    useEffect( () =>{
        const calculateGei = () => {
            let calcuGE = resultE * 0.004;
            setGeiE(calcuGE.toFixed(2));
            let calcuGH = resultH * 0.04;
            setGeiH(calcuGH.toFixed(2));
        }
        calculateGei();
    }, [resultE, resultH]);

    useEffect( () =>{
        const calculateDif = () => {
            let baseConsumo = 1000000
            let difConsumo = parseFloat(resultH) + parseFloat(resultE) - baseConsumo
            setDifC(difConsumo)
            let baseEmisiones = 1000000
            let difEmisiones = parseFloat(geiH) + parseFloat(geiE) - baseEmisiones
            setDifE(difEmisiones)
        }
        calculateDif();
    }, [resultH, resultE, geiE, geiH]);

    function reset() {
        setResultE('');
        setResultH('');
        setArea(0);
        setSelectedEdif('');
        setSelectedEdifE('');
        setSelectedEdifH('');
        setSelectedTec('');
        setSelectedTecE('');
        setSelectedTecH('');
        setSelectedTem('');
        setSelectedTemE('');
        setSelectedTemH('');
        setGeiE('');
        setGeiH('');
        setDifC(0);
        setDifE(0);
    }
    
    return(
        <div>
        <Paper elevation={1} className={classes.backPaper}>
            <Box p={2}>
        <Grid container spacing={3} justify="space-between">
            <Grid item xs={12} sm={9}>
                <Typography variant="h5">
                    Calculadora de emisiones de GEI aplicando tecnologías en techos
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
                        < TestSelect options={edif} label="Tipo de edificio" selected={selectedEdif} onSelectedChange={handleOptionEdif}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        < TestSelect options={tech} label="Tecnología" selected={selectedTec} onSelectedChange={handleOptionTec}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        < TestSelect options={temp} label="Temporada" selected={selectedTem} onSelectedChange={handleOptionTem}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <AreaInput onValueChange={handleArea} areaValue={area} idInput="input1" idHelper="input1-helper"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
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
                    <Grid item xs={12} sm={12}>
                        <Typography variant="h5">
                            GEI emitidos anualmente
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DisplayEnergy 
                        choice={true} 
                        units="MWh/AC" 
                        result={geiE}>
                        </DisplayEnergy>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DisplayEnergy 
                        choice={false} 
                        units="MWh" 
                        result={geiH}>
                        </DisplayEnergy>
                    </Grid>
                </Grid>
                
            </Grid>
            <Grid item xs={12} sm={3}>
                <DisplayAhorro ahorro={difC} evitados={difE}/>
            </Grid>
        </Grid>
        </Box>
        </Paper>
        </div>
    );
}

export default EdificacionSegundo;