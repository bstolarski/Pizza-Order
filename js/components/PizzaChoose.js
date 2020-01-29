import React, {Component} from 'react';
import ProductsRestApiService from "../services/ProductsRestApiServices";
import AddToCartLocalStorageServices, {GetOrderFromLocalStorage} from "../services/AddToCartLocalStorageServices";
import ListElement from "./ListElement";
import {NavLink} from "react-router-dom";

export default class PizzaChoose extends Component {
    state = {
        products: null,
        err: null,
        currentChoose: null,
        orderPositions: null
    };

    componentDidMount() {
        this.setState({
            orderPositions: GetOrderFromLocalStorage()
        });

        ProductsRestApiService.getProducts(
            products => this.setState({products: products}),
            err => this.setState({err: err})
        )
    }

    handleChange = (id, name, price) => {
        this.setState({
            currentChoose: {id, name, price}
        })
    };

    handleAddToCart = () => {
        this.setState({
            orderPosition: [...this.state.orderPositions, this.state.currentChoose]
        }, () => {
            this.setState({
                orderPositions: AddToCartLocalStorageServices(this.state.orderPositions)
            })
        })
    };

    render() {
        if (!this.state.products) return <h1>Pobieranie danych ....</h1>;

        return (
            <>
                <NavLink to='CreatePizza'>
                    <button className='btn btn-pizza'>Pizza</button>
                </NavLink>
                <ul className='list-group'>
                    {this.state.products.map(product =>
                        <ListElement id={product.id} name={product.name} price={product.price}
                                     eventClick={this.handleChange}/>
                    )}
                </ul>
                <NavLink to='CreatePizza'>
                    <button onClick={this.handleAddToCart} className='btn btn-secondary'>Add to cart</button>
                </NavLink>
            </>
        )
    }
}