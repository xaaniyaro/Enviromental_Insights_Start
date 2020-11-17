import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from '@material-ui/core/FormControl';
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240
  },
  selectElement: {
    marginTop: 18
  },
  iLabel: {
    marginTop: 18
  }
}));

export default function TestSelect({ options, label }) {
  const classes = useStyles();

  const [value, setValue] = React.useState("");
  const handleChange = event => setValue(event.target.value);

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="optionsL" className={classes.iLabel}>{label}</InputLabel>
        <Select
          className={classes.selectElement}
          labelId="optionsL"
          id="options"
          value={value}
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
    </div>
  );
}