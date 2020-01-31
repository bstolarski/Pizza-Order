import ReactDom from 'react-dom';
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import HeaderPage from "./HeaderPage";


export default class FormRegister extends Component {
    render() {
        return (
            <>
                <HeaderPage/>
                <form className='form'>
                    <input className='form-user' name='name' type='text' placeholder='Name'/>
                    <input name='password' type='text' placeholder='Password'/>
                    <input name='email' type='email' placeholder='Email'/>
                    <NavLink to='/CreatePizza'>
                        <button className='btn btn-primary'>Create</button>
                    </NavLink>
                    <div className='info-log'>
                        <p>Or</p>
                        <p>Already have an Account?
                            <NavLink className='disabled-link' to='/FormLogin'>
                                Sign in
                            </NavLink></p>
                    </div>
                </form>
            </>
        )
    }
}