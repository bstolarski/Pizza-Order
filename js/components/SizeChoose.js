import React, {Component} from 'react';
import {useState} from 'react';

export function SizeChoose(props) {

    const [select, setSelect] = useState("Small");

    const handleSelectChange = event => {
        const value = event.target.value;
        setSelect(value);
        if(typeof  props.eventClick === 'function'){
            props.eventClick(value);
        }
    };

    return (
        <div>
            <label className={select==='Small'?'btn-size-label checked':'btn-size-label'}>S
                <input className='btn-size-input'
                       type="radio"
                       name="radio"
                       value="Small"
                       onClick={event => handleSelectChange(event)}
                />
            </label>
            <label className={select==='Medium'?'btn-size-label checked':'btn-size-label'}>M
                <input className='btn-size-input'
                       type="radio"
                       name="radio"
                       value="Medium"
                       onClick={event => handleSelectChange(event)}
                />
            </label>
            <label className={select==='Large'?'btn-size-label checked':'btn-size-label'}>L
                <input className='btn-size-input'
                       type="radio"
                       name="radio"
                       value="Large"
                       onClick={event => handleSelectChange(event)}
                />
                </label>
        </div>
    )
}






