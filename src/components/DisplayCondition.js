import React, {useState} from 'react';
import TestSelect from './TestSelect';



const DisplayCondition = ({param, onChange, label, options}) => {
    const [selected, setSelected] = useState('');

    const handleOption = (optionValue) => {
        setSelected(optionValue);
        onChange(optionValue);
    }
    
    function reset() {
        setSelected('');
        onChange('');
    }

    if(param > 0){
        return(
            <div>
                <TestSelect options={options} label={label} selected={selected} onSelectedChange={handleOption}/>
            </div>
        );
    }
    else{
        return(
            <div>
                {reset}
            </div>
        );
    }
}

export default DisplayCondition;