import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import HeaderPage from "./HeaderPage";

export default class Cart extends Component {

    render() {
        return (
            <>
                <HeaderPage/>
                <button className="btn btn-plus">+</button>
                <p>Cena</p>
                <div>
                    <p>Pizza - nazwa</p>
                    <p>Rozmiar</p>
                </div>
                <NavLink to='/ConfirmOrderForm'>
                    <button className='btn'>Place Order Suma zamówienia</button>
                </NavLink>
            </>
        )
    }
}