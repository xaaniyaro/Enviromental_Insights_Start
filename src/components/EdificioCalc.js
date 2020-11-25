import React from 'react';
//import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//import Paper from '@material-ui/core/Paper';

/*const useStyles = makeStyles(theme => ({
    results: {
        margin: 10
    },
    content: {
        margin: 10
    }
  }));*/


const EdificioCalc = () => {

    //const classes = useStyles();

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
                <Grid item xs={12} sm={12}>
                    <Typography variant="h5">
                        1000 Toneladas de CO2 al año
                    </Typography>
                </Grid>
                
            </Grid>
        </div>
    );
}

export default EdificioCalc;