import React, { useState, useEffect } from 'react';

const Calculator = ({tecnologia, combustible}) =>{

    const [resultElec, setResultElec] = useState(0);
    const [resultHeat, setResultHeat] = useState(0);

    useEffect(() =>{
        const calc = () =>{
            let calculationE = tecnologia.valueelec * 13000 * 0.0004536;
            setResultElec(calculationE.toFixed(2));
            let calculationH = tecnologia.valueheat * 13000 * combustible.value;
            setResultHeat(calculationH.toFixed(2));
        }
        calc();
    }, [tecnologia, combustible])

    return(
        <div>
            <div>⚡: {resultElec} toneladas de CO2 al año</div>
            <div>🌡: {resultHeat} toneladas de CO2 al año</div>
        </div>
    );
}

export default Calculator;