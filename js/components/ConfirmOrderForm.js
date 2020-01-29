import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import HeaderPage from "./HeaderPage";

export default class ConfirmOrderForm extends Component {

    render() {
        return (
            <>
                <HeaderPage/>
                <form>
                    <p>Your Address</p>
                    <input/>
                    <p>City</p>
                    <input/>
                    <p>Phone number</p>
                    <input/>
                    <p>Payment Method</p>
                    <label>
                        <input type="checkbox" value="cash" name="payment"/>Cash</label>
                    <label>
                        <input type="checkbox" value="card" name="payment"/>Debit Card</label>
                    <label>
                        <input type="checkbox" value="paypal" name="payment"/>Paypal</label>
                    <NavLink to='/CompleteOrder'>
                        <button className='btn'>Suma do zapłacenia</button>
                    </NavLink>
                </form>
            </>
        )
    }
}