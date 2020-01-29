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
                    <input name='name' type='text' placeholder='Name'/>
                    <input name='password' type='text' placeholder='Password'/>
                    <input name='email' type='email' placeholder='Email'/>
                    <NavLink to='/CreatePizza'>
                        <button className='btn btn-primary'>Create</button>
                    </NavLink>
                    <p><span>Or</span></p>
                    <p>Already have an Account?
                        <NavLink to='/FormLogin'>
                            Sign in
                        </NavLink></p>
                </form>
            </>
        )
    }
}