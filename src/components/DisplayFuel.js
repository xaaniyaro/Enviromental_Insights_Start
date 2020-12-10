import React, {useState} from 'react';
import TestSelect from './TestSelect';

const combustibles = [
    {"Diesel": [0.00027]},
    {"Gas natural": [0.0002]},
    {"GLP": [0.0023]}
  ]

const DisplayFuel = ({selectedH, onFuelChange}) => {
    const [selected, setSelected] = useState('');

    const handleOption = (optionValue) => {
        setSelected(optionValue);
        onFuelChange(optionValue);
    }

    if(selectedH > 0){
        return(
            <div>
                <TestSelect options={combustibles} label="Combustible" selected={selected} onSelectedChange={handleOption}/>
            </div>
        );
    }
    else{
        return null;
    }
}

export default DisplayFuel;