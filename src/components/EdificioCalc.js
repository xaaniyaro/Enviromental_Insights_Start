import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    results: {
        margin: 10
    },
    content: {
        margin: 10
    }
  }));


const EdificioCalc = () => {

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
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={1} className={classes.results}>
                        <div className={classes.content}>
                        <Typography variant="h4" gutterBottom>
                            Caso base
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        </Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={1} className={classes.results}>
                    <div className={classes.content}>
                        <Typography variant="h4" gutterBottom>
                            Caso proyectado
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        </Typography>
                    </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default EdificioCalc;