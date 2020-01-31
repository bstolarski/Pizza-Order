import ReactDom from 'react-dom';
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class HeaderPage extends Component {
    render() {
        return (
            <header className="HeaderLogo">
                <NavLink className='disabled-link' to='/'>
                    <h1 className="header-logo">
                        <span>Pizza</span>
                        <span>Boiz</span>
                    </h1>
                </NavLink>
            </header>
        )
    }
}