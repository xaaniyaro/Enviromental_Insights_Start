import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from '@material-ui/core/FormControl';
import Select from "@material-ui/core/Select";
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    minWidth: '30ch',
    "& label.MuiInputLabel-outlined": {
      color: "black",
      fontSize: "14px"
      //fontWeight: 'bold'
    }
  }
    /*,
  selectElement: {
    marginTop: 18
  },
  iLabel: {
    marginTop: 18
  }*/
}));

const formLabelsTheme = createMuiTheme({
  overrides: {
    MuiFormLabel: {
      asterisk: {
        color: "#db3131",
        "&$error": {
          color: "#db3131"
        }
      }
    }
  }
});

export default function SelectLarge({ options, label, selected, onSelectedChange }) {
  const classes = useStyles();

  const handleChange = event => onSelectedChange(event.target.value);

  return (
    <div>
      <MuiThemeProvider theme={formLabelsTheme}>
            <form noValidate autoComplete="off">
              <FormControl required variant="outlined" className={classes.root}>
                <InputLabel id="optionsL">{label}</InputLabel>
                <Select
                  labelId="optionsL"
                  id="options"
                  value={selected}
                  onChange={handleChange}
                  label={label}
                >
                  {options.map(element => (
                    <MenuItem
                      value={element[Object.keys(element)] + ""}
                      key={Object.keys(element)[0]}
                    >
                      {Object.keys(element)[0]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
      </form>
      </MuiThemeProvider>
    </div>
  );
}