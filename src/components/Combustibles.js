import React from 'react';
import DropdownFinal from './DropdownFinal';

const Combustibles = ({combustibles, selectedComb, setSelectComb, selected}) => {
    if(selected.label != 'Paneles fotovoltáicos'){
      return(
        <DropdownFinal
        options={combustibles} 
        label="Selecciona un combustible" 
        selected={selectedComb}
        onSelectedChange={setSelectComb}/>
      )
    }
    else{
      return null
    }
  }

export default Combustibles;