import React, {useState} from 'react';
import './scss/main.scss';
import ReactDom from 'react-dom';
import {HashRouter, Switch, Route} from "react-router-dom";
import LandingPage from './js/components/LandingPage';
import FormRegister from "./js/components/FormRegister";
import FormLogin from "./js/components/FormLogin";
import CreatePizza from "./js/components/CreatePizza";
import PizzaChoose from "./js/components/PizzaChoose";
import ExtrasChoose from "./js/components/ExtrasChoose";

function App() {
    const [order, setOrder] = useState([]);

    let backGroundStyle = {
        backgroundImage: `url(./assets/pizza.png)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };

    return (
        <HashRouter>
            <>
                <div style={backGroundStyle} className="container">
                    <Switch>
                        <Route exact path="/" component={LandingPage}/>
                        <Route exact path="/FormRegister" component={FormRegister}/>
                        <Route exact path="/FormLogin" component={FormLogin}/>
                        <Route exact path="/CreatePizza" component={CreatePizza}/>
                        <Route exact path="/PizzaChoose" component={PizzaChoose}/>
                        <Route exact path='/ExtrasChoose' component={ExtrasChoose}/>
                    </Switch>
                </div>
            </>
        </HashRouter>
    )
}

ReactDom.render(<App/>, document.getElementById('app'));