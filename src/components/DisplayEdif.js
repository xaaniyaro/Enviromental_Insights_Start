import React, {useState} from 'react';
import SelectLarge from './SelectLarge';

const residencial = [
    { "Departamento": [51.455, 75, 25, 0.000589794]}
  ]
  
  const noresidencial = [
    { "Restaurante": [179.4025, 54, 46, 0.000600508]},
    { "Aulas": [191.6625, 100, 0, 0.000577039]},
    { "Oficina": [169.6875, 100, 0, 0.000577039]},
    { "Hospital": [395.71, 77, 23, 0.000588773]}
  ]

const DisplayEdif = ({selectedEdif, onEdifChange}) => {
    const [selected, setSelected] = useState('');

    const handleOption = (optionValue) => {
        setSelected(optionValue);
        onEdifChange(optionValue);
    }

    if(selectedEdif === 'yes'){
        return(
            <div>
                <SelectLarge options={residencial} label="Tipo de edificio residencial" selected={selected} onSelectedChange={handleOption}/>
            </div>
        );
    }
    else if(selectedEdif === 'no'){
        return(
            <div>
                <SelectLarge options={noresidencial} label="Tipo de edificio no residencial" selected={selected} onSelectedChange={handleOption}/>
            </div>
        );
    }
    else{
        return null;
    }
}

export default DisplayEdif;