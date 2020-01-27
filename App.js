import React from 'react';
import './scss/main.scss';
import ReactDom from 'react-dom';
import {HashRouter, Switch, Route} from "react-router-dom";
import HeaderPage from './components/HeaderPage';
import LandingPage from './components/LandingPage';
import FormRegister from "./components/FormRegister";

function App() {
    return (
        <HashRouter>
            <>
                <HeaderPage/>
                <Switch>
                    <Route exact path={"/"} component={LandingPage}/>
                    <Route exact path={"/FormRegister"} component={FormRegister}/>
                </Switch>
            </>
        </HashRouter>
    )
}

ReactDom.render(<App/>, document.getElementById('app'));