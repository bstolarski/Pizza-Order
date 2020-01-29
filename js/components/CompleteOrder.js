import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import HeaderPage from "./HeaderPage";

export default class CompleteOrder extends Component {
    render() {
        return (
            <>
                <HeaderPage/>
                <img/>
                <button>Your pizza is Coming!</button>
            </>
        )
    }
}