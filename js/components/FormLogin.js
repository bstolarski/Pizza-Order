import ReactDom from 'react-dom';
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import HeaderPage from "./HeaderPage";


export default class FormLogin extends Component {
    render() {
        return (
            <>
                <HeaderPage/>
                <form className='form'>
                    <input name='name' type='text' placeholder='Name'/>
                    <input name='password' type='text' placeholder='Password'/>
                    <NavLink to='/CreatePizza'>
                        <button className='btn btn-primary'>Sign In</button>
                    </NavLink>
                    <p><span>Or</span></p>
                    <p>Already don't have an Account?
                        <NavLink to='/FormRegister'>
                            Create
                        </NavLink></p>
                </form>
            </>
        )
    }
}