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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240
  }
}));

export default function AreaInput() {
  const classes = useStyles();
  const [area, setArea] = React.useState('');

  const handleChange = () => (event) => {
    setArea(event.target.value);
  };

    return(
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
            <FormHelperText id="outlined-area-helper-text">Área</FormHelperText>
          <OutlinedInput
            id="outlined-adornment-area"
            value={area}
            onChange={handleChange}
            endAdornment={<InputAdornment position="end">m²</InputAdornment>}
            aria-describedby="outlined-area-helper-text"
            inputProps={{
              'aria-label': 'area',
            }}
            labelWidth={0}
          />
         </FormControl>
        </div>
    );

}