import ReactDom from 'react-dom';
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class HeaderPage extends Component {
    render() {
        return (
            <NavLink to='/'>
                <h1 className="HeaderLogo">Pizza Boiz</h1>
            </NavLink>
        )
    }
}