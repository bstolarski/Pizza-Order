import ReactDom from 'react-dom';
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


export default class FormRegister extends Component {
    render() {
        return (
            <form className='form-register'>
                <input name='name' type='text' placeholder='Name'/>
                <input name='password' type='text' placeholder='Password'/>
                <input name='email' type='email' placeholder='Email'/>
                <NavLink to='/CreatePizza'>
                    <button className='btn'>Create</button>
                </NavLink>
            </form>
        )
    }
}