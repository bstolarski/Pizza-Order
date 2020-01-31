import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import HeaderPage from "./HeaderPage";
import {useState} from 'react';
import saveOrderRestApiServices from "../services/SaveOrderRestApiServices";

export default function ConfirmOrderForm(props) {

    const [state, setState] = React.useState({
        address: "",
        city: "",
        phone: "",
        payment: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = props.order;
        saveOrderRestApiServices(order, state);
    };

    return (
        <>
            <section className='cartContainer'>
                <HeaderPage/>
                <form onSubmit={event => handleSubmit(event)} className='form-complete'>
                    <p>Your Address</p>
                    <input type="text" placeholder={"Your Address"} name="address"
                           value={state.address}
                           onChange={event => handleChange(event)}/>
                    <p>City</p>
                    <input type="text" placeholder={"City"} name="city"
                           value={state.city}
                           onChange={event => handleChange(event)}/>
                    <p>Phone number</p>
                    <input type="text" placeholder={"Phone number"} name="phone"
                           value={state.phone}
                           onChange={event => handleChange(event)}/>
                    <p>Payment Method</p>
                    <label className={state.payment === 'cash' ? 'btn-payment checked' : 'btn-payment'}>
                        <input
                            type="radio"
                            name="payment"
                            value="cash"
                            onClick={event => handleChange(event)}
                        />
                    </label><p>Cash</p>
                    <label className={state.payment === 'card' ? 'btn-payment checked' : 'btn-payment'}>
                        <input
                            type="radio"
                            name="payment"
                            value="card"
                            onClick={event => handleChange(event)}
                        />
                    </label><p>Card</p>
                    <label className={state.payment === 'paypal' ? 'btn-payment checked' : 'btn-payment'}>
                        <input
                            type="radio"
                            name="payment"
                            value="paypal"
                            onClick={event => handleChange(event)}
                        />
                    </label><p>PayPal</p>
                    <NavLink to='/CompleteOrder'>
                        <button className='btn btn-complete'>
                            {props.order.pricePizza + props.order.priceExtra} zł
                        </button>
                    </NavLink>
                </form>
            </section>
        </>
    )
}