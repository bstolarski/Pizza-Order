import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import HeaderPage from "./HeaderPage";
import AddToCartLocalStorageServices, {GetOrderFromLocalStorage} from "../services/AddToCartLocalStorageServices";

export default class Cart extends Component {
    state = {
        cart: null
    };

    render() {
        return (
            <>
                <section className='cartContainer'>
                    <HeaderPage/>
                    <button className="btn btn-plus">+</button>
                    <NavLink to='/ConfirmOrderForm'>
                        <button className='btn'>Place Order Suma zamówienia</button>
                    </NavLink>
                </section>
            </>
        )
    }
}