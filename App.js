import React from 'react';
import './scss/main.scss';
import ReactDom from 'react-dom';
import {HashRouter, Switch, Route} from "react-router-dom";
import HeaderPage from './js/components/HeaderPage';
import LandingPage from './js/components/LandingPage';
import FormRegister from "./js/components/FormRegister";
import backgroundImage from './assets/pizza.png'

function App() {

    let backGroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };
    return (
        <HashRouter>
            <>
                <div style={{backGroundStyle}} className="container">
                    <HeaderPage/>
                    <Switch>
                        <Route exact path="/" component={LandingPage}/>
                        <Route exact path="/FormRegister" component={FormRegister}/>
                    </Switch>
                </div>
            </>
        </HashRouter>
    )
}

ReactDom.render(<App/>, document.getElementById('app'));