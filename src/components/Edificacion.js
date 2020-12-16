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
import InfoIcon from '@material-ui/icons/Info';
import Popover from '@material-ui/core/Popover';

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

const residencial = [
    { "Departamento": [51.455, 75, 25, 0.000589794]}
]

const noresidencial = [
    { "Restaurante": [179.4025, 54, 46, 0.000600508]},
    { "Aulas": [191.6625, 100, 0, 0.000577039]},
    { "Oficina": [169.6875, 100, 0, 0.000577039]},
    { "Hospital": [395.71, 77, 23, 0.000588773]}
]

const Edificacion = ( {edif} ) => {
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

    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleOption = (optionValue) => {
        setSelected(optionValue)
    }

    const handleArea = (areaValue) =>{
        setArea(areaValue);
    }

    useEffect( () =>{
        const calculateResults = () => {
            let calcuE = area * selectedEUI * (selectedE/100);
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
        if(edifValue !== ''){
            let arr = edifValue.split(",");
            setSelectedEUI(parseFloat(arr[0]));
            setSelectedE(parseFloat(arr[1]));
            setSelectedH(parseFloat(arr[2]));
            setSelectedFactor(parseFloat(arr[3]));
        }
    }

    function reset() {
        setSelected('');
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
                    <Button variant="contained" onClick={reset}>Limpiar</Button>
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
                            <DisplayEdif selectedEdif={selected} onEdifChange={handleEdifType} resi={residencial} noresi={noresidencial}/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Box display="flex" justifyContent="center">
                            <AreaInput onValueChange={handleArea} areaValue={area} idInput="input1" idHelper="input1-helper" label="Área de construcción"/>
                        </Box>
                    </Grid>
                    <Grid item xd={12} sm={12}>
                        <Button aria-describedby={id} onClick={handleClick}>
                            <InfoIcon  color="primary"/>
                        </Button>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'center',
                                horizontal: 'right',
                            }}
                              transformOrigin={{
                                vertical: 'center',
                                horizontal: 'left',
                            }}
                            >
                            <Box p={2}>
                            Cálculos realizados bajo las siguientes consideraciones: 
                            <ul>
                                <li>Análisis de los patrones de consumo de los años 2018 y 2019.</li>
                                <li>Medición de consumo de los meses: septiembre, octubre y noviembre de 2020.</li>
                                <li>Edificaciones en el área metropolitana de Monterrey.</li>
                                <li>Perfil horario por tipo de edificación:</li>
                                <ul>
                                    <li>Residencial: lunes a viernes: Ocupado 6:00 pm – 7:00 am. sábado y domingos: Ocupado 24 horas</li>
                                    <li>Restaurante: lunes a viernes: Ocupado 8:00 am – 6:00 pm. sábado y domingos: Desocupado 24 horas</li>
                                    <li>Aulas: lunes a viernes: Ocupado 7:00 am– 7:00 pm. sábado y domingos: Desocupado 24 horas</li>
                                    <li>Oficinas: lunes a viernes: Ocupado 7:00 am– 7:00 pm. sábado y domingos: Desocupado 24 horas</li>
                                    <li>Hospital: lunes a domingo: Ocupado 24 horas.</li>
                                </ul>
                            </ul>
                        </Box>
                        </Popover>
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
                        units="kWh/año" 
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