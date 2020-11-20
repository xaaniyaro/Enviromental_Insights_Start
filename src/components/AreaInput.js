import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '30ch',
  },
}));

export default function AreaInput( {areaValue, onValueChange, idInput, idHelper} ) {
  const classes = useStyles();

  
  const handleChange = (event) => {
    onValueChange(event.target.value);
  };

    return(
        <div>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <OutlinedInput
              id={idInput}
              value={areaValue}
              onChange={handleChange}
              endAdornment={<InputAdornment position="end">m²</InputAdornment>}
              aria-describedby={idHelper}
              inputProps={{
                'aria-label': 'area',
              }}
              labelWidth={0}
            />
            <FormHelperText id={idHelper}>Área</FormHelperText>
          </FormControl>
        </div>
    );

}