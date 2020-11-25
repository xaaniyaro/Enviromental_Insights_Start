import React from 'react';
import Grid from '@material-ui/core/Grid';
import AreaInput from './AreaInput';
import TestSelect from './TestSelect';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

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
        backgroundColor: "#327BB8",
        width: "100%",
        height: "100%"
    },
    electricR: {
        color: "white"
    },
    heatBack: {
        backgroundColor: "#B83632",
        width: "100%",
        height: "100%"
    },
    heatR: {
        color: "white"
    }
  }));

const SolarEstruc = ( {tecnologia} ) => {
    const classes = useStyles();

    const [selected, setSelected] = React.useState('');
    const [area, setArea] = React.useState(0);

    const handleOption = (optionValue) => {
        setSelected(optionValue);
    }

    const handleArea = (areaValue) =>{
        setArea(areaValue);
    }

    return(
        <div>
        <Paper elevation={1} className={classes.backPaper}>
            <Box p={2}>
        <Grid container spacing={3} justify="space-between">
            <Grid item xs={12} sm={9}>
                <Typography variant="h4" className={classes.header}>
                    Producción energética
                </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Box display="flex" justifyContent="flex-end">
                    <Button variant="contained">Resetear</Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                    < TestSelect options={tecnologia} label="Tecnología" selected={selected} onSelectedChange={handleOption}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                    <AreaInput onValueChange={handleArea} areaValue={area} idInput="input1" idHelper="input1-helper"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={9}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                    <Typography variant="h5">
                        Total
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.electricBack}>
                            <Box display="flex" justifyContent="center" p={2}>
                                <Typography variant="subtitle2" className={classes.electricR}>
                                    28.82 watts h / año
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.heatBack}>
                            <Box display="flex" justifyContent="center" p={2}>
                                <Typography variant="subtitle2" className={classes.heatR}>
                                    28.82 watts h / año
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                    <Typography variant="h5">
                        Específica
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.electricBack}>
                            <Box display="flex" justifyContent="center" p={2}>
                                <Typography variant="subtitle2" className={classes.electricR}>
                                    28.82 watts h / año
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.heatBack}>
                            <Box display="flex" justifyContent="center" p={2}>
                                <Typography variant="subtitle2" className={classes.heatR}>
                                    28.82 watts h / año
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
                
            </Grid>
        </Grid>
        </Box>
        </Paper>
        </div>
    );
}

export default SolarEstruc;