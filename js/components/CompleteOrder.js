import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import HeaderPage from "./HeaderPage";

export default class CompleteOrder extends Component {
    render() {
        return (
            <>
                <HeaderPage/>
                <img className='img-complete-order' src={"assets/PizzaImg.png"} alt="pizza"/>
                <NavLink to='/'>
                    <button className='btn btn-complete'>Your pizza is Coming!</button>
                </NavLink>
            </>
        )
    }
}