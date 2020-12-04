import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TestSelect from './TestSelect';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import DisplayEnergy from './DisplayEnergy';
import DisplayFuel from './DisplayFuel';
import DisplaySummary from './DisplaySummary';
import InfoIcon from '@material-ui/icons/Info';

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
    typography: {
        padding: theme.spacing(2),
    },
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
    const [geiE, setGeiE] = React.useState('');
    const [geiH, setGeiH] = React.useState('');
    const [sumGei, setSumGei] = React.useState(0);
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
        setSelected(optionValue);
        let arr = optionValue.split(',');
        setSelectedT(arr[0]);
        setSelectedE(arr[1]);
        setSelectedH(arr[2]);
    }

    useEffect( () =>{
        const calculateResults = () => {
            let calcuE = selectedE * 13400000 / 1000000;
            setResultE(Math.round(calcuE));
            let calcuH = selectedH * 13400000 / 1000000;
            setResultH(Math.round(calcuH));
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
    }, [selectedE, selectedH, selectedT]);

    useEffect( () =>{
        const calculateGei = () => {
            let calcGeiE = resultE * 1000000 * 0.0004536;
            setGeiE(Math.round(calcGeiE));
            let calcGeiH = resultH * 1000000 * fuel;
            setGeiH(Math.round(calcGeiH));
        }
        calculateGei();
    }, [resultE, resultH, fuel]);

    useEffect( () =>{
        const makeSum = () => {
            let sumG = parseInt(geiE) + parseInt(geiH);
            setSumGei(sumG);
        }
        makeSum();
    }, [geiE, geiH]);

    const handleFuel = (fuelValue) =>{
        let val = parseFloat(fuelValue);
        setFuel(val);
    }
    
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
        setSumGei(0);
    }

    return(
        <div>
        <Paper elevation={1} className={classes.backPaper}>
            <Box p={2}>
        <Grid container spacing={3} justify="space-between">
            <Grid item xs={12} sm={9}>
                <Typography variant="h4" className={classes.header}>
                    Calculadora total
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
                        <TestSelect options={tecnologia} label="Tecnología" selected={selected} onSelectedChange={handleOption}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <DisplayFuel selectedH={selectedH} onFuelChange={handleFuel} />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Box p={1} marginTop={2}>
                        <Paper elevation={1}>
                            <Box p={1}>
                                <Typography variant="body1">
                                    Área considerada:
                                </Typography>
                                <Typography variant="body1">
                                    13,400,000 m²
                                </Typography>
                                <Typography variant="body2">
                                    *Corresponde al área de Monterrey
                                </Typography>
                            </Box>
                        </Paper>
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
                            <Typography cla ssName={classes.typography}>The content of the Popover.</Typography>
                        </Popover>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={7}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <Typography variant="h5">
                            Producción energética
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DisplayEnergy 
                        choice={true} 
                        units="MWh/AC " 
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