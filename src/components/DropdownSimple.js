
import React, { useState, useEffect, useRef } from 'react';

const DropdownSimple = ({ options, selected, onSelectedChange, label }) => {

    const [open, setOpen] = useState(false);
    const [resultElec, setResultElec] = useState(0);
    const [resultHeat, setResultHeat] = useState(0);
    const [option, setOption] = useState('');
    const ref = useRef();

    useEffect(() =>{
        const onBodyClick = (event) => {
            if(ref.current && ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick, {capture: true});

        //cleanup function if the component is removed from the DOM
        return() => {
            document.body.removeEventListener('click', onBodyClick, {capture: false});
        };
    }, [])

    useEffect(() =>{
        const calc = () =>{
            let calculationE = selected.valueelec * 13000 / 1000;
            setResultElec(calculationE.toFixed(2));
            let calculationH = selected.valueheat * 13000 / 1000;
            setResultHeat(calculationH.toFixed(2));
        }
        calc();
    }, [selected])

    const renderedOptions = options.map((option) => {

        if(option.valueelec === selected.valueelec){
            return null
        }
        return(
            <div key={option.valueelec} className="item" onClick={() => {onSelectedChange(option)}}>
                <img src={option.img} style={{width: '20px', height:'20px'}}></img>{option.label}
            </div>
        );
    })
    
    return(
        <div>
            <div ref={ref} className="ui form">
            <div className="ten wide field">
            <label className="label">{label}</label>
                    <div className={`ui selection dropdown ${open ? 'visible active' : ''}`} onClick={() => setOpen(!open)}>
                        <i className="dropdown icon"></i>
                        <div className="text"><img src={selected.img} style={{width: '20px', height:'20px'}}></img>{selected.label}</div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>
                            {renderedOptions}
                        </div>
                    </div>
                </div>
            </div>
                    
            <div>⚡: {resultElec} megawatts hora por año</div>
            <div>🌡: {resultHeat} megawatts hora por año</div>
        </div>
        
    );
};

export default DropdownSimple;