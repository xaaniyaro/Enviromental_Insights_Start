import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SolarCalculator = ({ options }) => {
    const classes = useStyles();
    const [elec, setElec] = React.useState(0);
    const [heat, setHeat] = React.useState(0);

    const handleChange = (event) => {
        setElec(event.target.valueelec);
        setHeat(event.target.valueheat);
        console.log(heat);
        console.log(elec);
    };

    const renderedOptions = options.map((option) => {
        return(
            <MenuItem key={option.label} valueelec={option.valueelec} valueheat={option.valueheat}>{option.label}</MenuItem>
        );
    })


    return (
        <div>
            <h1>Producción energética total</h1>
            <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Tecnología</InputLabel>
            <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            valueelect={elec}
            valueheat={heat}
            onChange={handleChange}
            label="Tecnología"
            >
            {renderedOptions}
            </Select>
            </FormControl>
            <h1>Producción energética específica</h1>
            
            <h1>Reducción de gases de efecto invernadero</h1>
            
        </div>
    );
}

export default SolarCalculator;