import React, {useState, useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    resultsSection: {
        backgroundColor: '#f5f5f5'
    },
    resultsGrid: {
        margin: 10
    }
  }));


const SegundoCalc = () => {

    const classes = useStyles();
    /*const [resultElecB, setResultElecB] = useState(0);
    const [resultHeatB, setResultHeatB] = useState(0);
    const [resultElecE, setResultElecE] = useState(0);
    const [resultHeatE, setResultHeatE] = useState(0);*/

    /*useEffect(() =>{
        const calc = () =>{
            let resBaseE = 13000 * tipoedificio[0];
            setResultElecB(resBaseE.toFixed(2));
            let resBaseH = 13000 * tipoedificio[1];
            setResultHeatB(resBaseH.toFixed(2));
            let resEspE = area * tipoedificio[0];
            setResultElecE(resEspE.toFixed(2));
            let resEspH = area * tipoedificio[1];
            setResultHeatE(resEspH.toFixed(2));
        }
        calc();
    }, [tipoedificio, area])*/

    return(
        <div>
        <Paper elevation={3} className={classes.resultsSection}>
        <Grid container spacing={2} className={classes.resultsGrid}>
                <Grid item xs={12} sm={5}>
                    <Paper elevation={1} className={classes.results}>
                        <div className={classes.content}>
                        <Typography variant="h5" gutterBottom>
                            Consumo proyectado
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        </Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Paper elevation={1} className={classes.results}>
                    <div className={classes.content}>
                        <Typography variant="h5" gutterBottom>
                            Ahorro proyectado
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        </Typography>
                    </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Paper elevation={1} className={classes.results}>
                        <div className={classes.content}>
                        <Typography variant="h5" gutterBottom>
                            Cantidad de GEI emitidos al año
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        </Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Paper elevation={1} className={classes.results}>
                    <div className={classes.content}>
                        <Typography variant="h5" gutterBottom>
                            Ahorro en emisiones de GEI
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        </Typography>
                    </div>
                    </Paper>
                </Grid>
        </Grid>
        </Paper>
        </div>
    );
}

export default SegundoCalc;