import React, {Component} from 'react';
import {useState} from 'react';

export default function ExtraChoose(props) {

    const [select, setSelect] = useState("");

    const handleSelectChange = event => {
        const {eventClick, id, name, price} = props;
        const value = event.target.value;
        setSelect(value);
        if (typeof eventClick === 'function') {
            eventClick(id, name, price);
        }
    };
    const {id, name, price} = props;
    return (
        <label className={select === {name} ? 'single-element checked-pizza' : 'single-element'}>
            {name} - {price} zł
            <input className='btn-size-input'
                   type="radio"
                   name="extraChose"
                   value={name}
                   onClick={event => handleSelectChange(event)}
                   key={id}
            />
        </label>
    )
}