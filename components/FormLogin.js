import ReactDom from 'react-dom';
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


export default class FormLogin extends Component {
    render() {
        return (
            <form className='form-login'>
                <input name='name' type='text' placeholder='Name'/>
                <input name='password' type='text' placeholder='Password'/>
                <NavLink to='/CreatePizza'>
                    <button className='btn'>Sign In</button>
                </NavLink>
            </form>
        )
    }
}