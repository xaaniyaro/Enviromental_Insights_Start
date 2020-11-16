import { render } from '@testing-library/react';
import React, { useState, useEffect, useRef } from 'react';

const DropdownBase = ({ options, selected, onSelectedChange, label }) => {

    const [open, setOpen] = useState(false);
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

    const renderedOptions = options.map((option) => {

        if(option.value === selected.value){
            return null
        }
        return(
            <div key={option.value} className="item" onClick={() => {onSelectedChange(option)}}>
                {option.label}
            </div>
        );
    })
    
    return(
        <div style={{ marginLeft:'50px'}}>
            <div ref={ref} className="ui form">
            <div className="four wide field">
                <label className="label">{label}</label>
                <div className={`ui selection dropdown ${open ? 'visible active' : ''}`} onClick={() => setOpen(!open)}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
            </div>
        </div>
        
    );
};

export default DropdownBase;