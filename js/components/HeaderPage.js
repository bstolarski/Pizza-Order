import ReactDom from 'react-dom';
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class HeaderPage extends Component {
    render() {
        return (
            <header className="HeaderLogo">
                <NavLink to='/'>
                    <h1>Pizza Boiz</h1>
                </NavLink>
            </header>
        )
    }
}