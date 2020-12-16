import React, {useState} from 'react';
import SelectLarge from './SelectLarge';

const DisplayEdif = ({selectedEdif, onEdifChange, resi, noresi}) => {
    const [selected, setSelected] = useState('');

    const handleOption = (optionValue) => {
        setSelected(optionValue);
        onEdifChange(optionValue);
    }

    function clean(){
        setSelected('');
        onEdifChange('');
    }

    if(selectedEdif === 'yes'){
        return(
            <div>
                <SelectLarge options={resi} label="Tipo de edificio residencial" selected={selected} onSelectedChange={handleOption}/>
            </div>
        );
    }
    else if(selectedEdif === 'no'){
        return(
            <div>
                <SelectLarge options={noresi} label="Tipo de edificio no residencial" selected={selected} onSelectedChange={handleOption}/>
            </div>
        );
    }
    else{
        return (
        <div>
            {clean}
        </div>);
    }
}

export default DisplayEdif;