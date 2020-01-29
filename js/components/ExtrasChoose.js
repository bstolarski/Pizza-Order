import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import ExtrasRestApiService from "../services/ExtrasRestApiServices";
import HeaderPage from "./HeaderPage";
import ListElement from "./ListElement";
import AddToCartLocalStorageServices from "../services/AddToCartLocalStorageServices";

export default class ExtrasChoose extends Component {
    state = {
        extras: null,
        err: null,
        cartList: [],
        currentChoose: []
    };

    componentDidMount() {
        ExtrasRestApiService.getExtras(
            extras => this.setState({extras: extras}),
            err => this.setState({err: err})
        )
    }

    handleClick = (id, name, price) => {
        this.setState({
            currentChoose: {id, name, price}
        })
    };

    handleAddToCart = () => {
        const {cartList, currentChoose} = this.state;
        this.setState({
            cartList: [...cartList, currentChoose]
        });
        let localOrder = localStorage.getItem('order');
        let newOrder = [...localOrder, cartList];
        AddToCartLocalStorageServices(newOrder);
    };


    render() {
        if (!this.state.extras) return <h1>Pobieranie danych ....</h1>;

        return (
            <>
                <HeaderPage/>
                <NavLink to='/CreatePizza'>
                    <button className='btn btn-secondary'>Extras</button>
                </NavLink>
                <ul className="list-group">
                    {this.state.extras.map(extra =>
                        <ListElement id={extra.id} name={extra.name} price={extra.price} eventClick={this.handleClick}/>
                    )}
                </ul>
                <NavLink to='CreatePizza'>
                    <button onClick={this.handleAddToCart} className='btn btn-secondary'>Add to cart</button>
                </NavLink>
            </>
        )
    }
}