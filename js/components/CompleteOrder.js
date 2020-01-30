import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import HeaderPage from "./HeaderPage";

export default class CompleteOrder extends Component {
    render() {
        return (
            <>
                <HeaderPage/>
                <img src={"assets/PizzaImg.png"} alt="pizza"/>
                <button>Your pizza is Coming!</button>
            </>
        )
    }
}