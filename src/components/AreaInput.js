import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '30ch',
  },
  root: {
    '& .MuiInputAdornment-root': {
      fontWeight: 'bold'
    }
  }
}));

export default function AreaInput( {areaValue, onValueChange, idInput, idHelper, label} ) {
  const classes = useStyles();

  
  const handleChange = (event) => {
    onValueChange(event.target.value);
  };

    return(
      <div>
        <FormControl className={clsx(classes.margin, classes.textField, classes.root)} variant="outlined">
          <OutlinedInput
            id={idInput}
            value={areaValue}
            onChange={handleChange}
            endAdornment={<InputAdornment position="end">m²</InputAdornment>}
            aria-describedby={idHelper}
            type='number'
            inputProps={{
              'aria-label': 'area',
              className: classes.input
            }}
            labelWidth={0}
          />
          <FormHelperText id={idHelper}>{label}</FormHelperText>
        </FormControl>
      </div>
    );
}