import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class LandingPage extends Component{
    render() {
        return (
            <section className="main-section">
                <h2>Hungry?</h2>
                <h2>Girlfriend Angry?</h2>
                <h2>No worries We'll Handle it!</h2>
                <NavLink to="/FormRegister">
                    <button className="btn">Start</button>
                </NavLink>
            </section>
        )
    }
}