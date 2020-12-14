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
import DisplayCalcu from './DisplayCalcu';
import DisplayEdif from './DisplayEdif';
import DisplayCondition from './DisplayCondition';
import DisplaySaving from './DisplaySaving';
import InfoIcon from '@material-ui/icons/Info';
import Popover from '@material-ui/core/Popover';

//Primer valor para ubicar tecnologia, segundo valor EUI base, tercer valor factor emisiones
const residencial = [
    { "Departamento": [0, 148.732684892857, 0.00058979379]}
  ]
  
//Primer valor para ubicar tecnologia, segundo valor EUI base, tercer valor factor emisiones
const noresidencial = [
{ "Restaurante": [1, 294.401505017857, 0.0006005079144]},
{ "Aulas": [2, 200.176775732143,0.00057703888]},
{ "Oficina": [3, 143.148956196429, 0.00057703888]},
{ "Hospital": [4, 391.969762803571, 0.0005887733972]}
]

//[1]: departamento [2]: restaurante [3]: aulas [4]: oficina [5]: hospital
const tecnologias = [
    {"PCM": [128.401676125, 273.662720607143, 194.604431875, 139.794239785714, 375.327964107143]},
    {"PCM + Pintura Reflectiva": [118.344585839286, 242.4896195, 169.281653875, 117.708888553571, 328.334337625]},
    {"PCM + Aislante": [118.888194053571, 257.602488910714, 184.651429357143, 134.1043315, 361.580940857143]}
]

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
        marginTop: '30px',
        marginBottom: "50px"
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

    const [selected, setSelected] = React.useState(null);
    const [selectedAux, setSelectedAux] = React.useState(null);
    const [selectedBase, setSelectedBase] = React.useState(null);
    const [selectedFactor, setSelectedFactor] = React.useState(null);
    const [selectedTech, setSelectedTech] = React.useState(null);
    const [area, setArea] = React.useState(0);

    const [resultBase, setResultBase] = React.useState('');
    const [resultProy, setResultProy] = React.useState('');

    const [geiB, setGeiB] = React.useState('');
    const [geiP, setGeiP] = React.useState('');
    
    const [ahorro, setAhorro] = React.useState(0);
    const [insight, setInsight] = React.useState(null);
    const [tree, setTree] = React.useState(null);

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

    const handleEdifType = (edifValue) =>{
        let arr = edifValue.split(",");
        setSelectedAux(parseInt(arr[0]));
        setSelectedBase(parseFloat(arr[1]));
        setSelectedFactor(parseFloat(arr[2]));
    }

    const handleTech = (optionsArray) =>{
        let arr = optionsArray.split(",");
        setSelectedTech(arr[selectedAux]);
    }

    useEffect( () =>{
        const calculateResults = () => {
            let calcBase = area * selectedBase;
            setResultBase(parseFloat(calcBase.toFixed(2)));
            let calcProy = area * selectedTech;
            setResultProy(parseFloat(calcProy.toFixed(2)));
            let saving = 100 - (calcProy*100/calcBase);
            setAhorro(parseFloat(saving.toFixed(2))); 
            let calcuIns = (calcBase - calcProy) / 4116.4;
            setInsight(parseFloat(calcuIns.toFixed(2)));
            let calcuTree = (calcBase - calcProy)*3.64/10000;
            setTree(parseFloat(calcuTree.toFixed(2)));
        }
        calculateResults();
    }, [selectedBase, selectedTech, area]);

    useEffect( () =>{
        const calculateGei = () => {
            let calcGeiB = selectedFactor * resultBase;
            setGeiB(parseFloat(calcGeiB.toFixed(2)));
            let calcGeiP = selectedFactor * resultProy;
            setGeiP(parseFloat(calcGeiP.toFixed(2)));
        }
        calculateGei();
    }, [resultBase, resultProy, selectedFactor]);

    

    function reset() {
        setSelected(null);
        setSelectedAux(null);
        setSelectedBase(null);
        setSelectedFactor(null);
        setSelectedTech(null);
        setArea(0);

        setResultBase('');
        setResultProy('');

        setGeiB('');
        setGeiP('');

        setAhorro(0);
        setInsight(null);
        setTree(null);
    }
    
    return(
        <div>
        <Paper elevation={1} className={classes.backPaper}>
            <Box p={2}>
        <Grid container spacing={3} justify="space-between">
            <Grid item xs={12} sm={9}>
                <Typography variant="h4" className={classes.header}>
                    Aplicación de tecnologías en techos
                </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Box display="flex" justifyContent="flex-end">
                    <Button variant="contained" onClick={reset}>Resetear</Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                < TestSelect options={edif} label="Tipo de edificio" selected={selected} onSelectedChange={handleOption}/>
                <DisplayEdif selectedEdif={selected} onEdifChange={handleEdifType} resi={residencial} noresi={noresidencial}/>
                <DisplayCondition  options={tecnologias} label="Tecnología techo" param={selectedBase} onChange={handleTech}/>
                <AreaInput onValueChange={handleArea} areaValue={area} idInput="input1" idHelper="input1-helper" label="Área de techo"/>
                </Box>
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
                        <li>Simulaciones energéticas transitorias para un caso típico.</li>
                        <li>Características del modelo Base: </li>
                        <ul>
                            <li>Construcción de envolvente típica de México</li>
                                <ul>
                                    <li>Muros: block arcilla y acabado de yeso y pintura.</li>
                                    <li>Techos: Losa de Concreto de 15 cm, acabado de cemento al exterior y de yeso al interior.</li>
                                    <li>Ventanas: Residencial: sencilla con vidrio claro de 6mm</li>
                                    <li>No residencial: Muro cortina doble con espacio de aire de 13 mm entre dos hojas de vidrio de 6mm c/u)</li>
                                </ul>
                            <li>Relación Muro- Ventana: Residencial: 20% / No residencial: 39%</li>
                            <li>Ventanas sólo en la fachada sur.</li>
                        </ul>
                        <li>Características del modelo experimental: Sólo difiere al modelo base en la aplicación de la tecnología a evaluar.</li>
                    </ul>
                    </Box>
                </Popover>
                <Box display="flex" fontSize={16}>
                *Cálculos para Monterrey, México
                </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <Box textAlign="center">
                            <Typography variant="h5">
                                Consumo energético anual
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box textAlign="center">
                            <Typography variant="h6">
                                Sin tecnología
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box textAlign="center">
                            <Typography variant="h6">
                                Con tecnología
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DisplayCalcu 
                        choice={true} 
                        units="kWh/año" 
                        result={resultBase}>
                        </DisplayCalcu>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DisplayCalcu 
                        choice={true} 
                        units="kWh/año" 
                        result={resultProy}>
                        </DisplayCalcu>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Box textAlign="center">
                            <Typography variant="h5">
                                Emisiones generadas al año
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box textAlign="center">
                            <Typography variant="h6">
                                Sin tecnología
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box textAlign="center">
                            <Typography variant="h6">
                                Con tecnología
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DisplayCalcu 
                        choice={false} 
                        units="tCO2e/año" 
                        result={geiB}>
                        </DisplayCalcu>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DisplayCalcu 
                        choice={false} 
                        units="tCO2e/año" 
                        result={geiP}>
                        </DisplayCalcu>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <DisplayAhorro ahorro={ahorro}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={2}>
                    <Box textAlign="center" fontSize={20} fontStyle="medium">
                        Lo que equivale a:
                    </Box>
                    <DisplaySaving insight={insight} toggle={true} />
                    <DisplaySaving insight={tree} toggle={false}/>
                </Grid>
        </Grid>
        </Box>
        </Paper>
        </div>
    );
}

export default Edificacion;