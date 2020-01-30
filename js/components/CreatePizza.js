import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import HeaderPage from "./HeaderPage";
import PizzaChoose from "./PizzaChoose";
import ProductsRestApiService from "../services/ProductsRestApiServices";
import ExtrasRestApiService from "../services/ExtrasRestApiServices";
import ExtraChoose from "./ExtraChoose";
import {SizeChoose} from "./SizeChoose";
import Cart from "./Cart";

export default class CreatePizza extends Component {
    state = {
        displayPizzas: false,
        displayExtras: false,
        displayCart: false,
        products: null,
        extras: null,
        err: null,
        currentChoosePizza: null,
        currentChooseExtra: null,
        currentChooseSize: null,
        order: {}
    };

    componentDidMount() {
        ProductsRestApiService.getProducts(
            products => this.setState({products: products}),
            err => this.setState({err: err})
        );
        ExtrasRestApiService.getExtras(
            extras => this.setState({extras: extras}),
            err => this.setState({err: err})
        )
    }
    handleDisplayCart = () => {
        this.setState({
            displayCart: !this.state.displayCart
        })
    };

    handleDisplayPizza = () => {
        this.setState({
            displayPizzas: !this.state.displayPizzas
        });
        if (this.state.displayExtras) {
            this.setState({
                displayExtras: false
            })
        }
    };

    handleDisplayExtra = () => {
        this.setState({
            displayExtras: !this.state.displayExtras
        });
        if (this.state.displayPizzas) {
            this.setState({
                displayPizzas: false
            })
        }
    };

    handleChangeSize = (e) => {
        this.setState({
            currentChooseSize: e.target.value
        })
    };

    handleChangePizza = (id, name, price) => {
        this.setState({
            currentChoosePizza: {id, name, price}
        })
    };

    handleChangeExtra = (id, name, price) => {
        this.setState({
            currentChooseExtra: {id, name, price}
        })
    };

    render() {
        const {displayPizzas, displayExtras, displayCart} = this.state;
        return (
            <>
                <HeaderPage/>
                <section className='section-pizza-create'>
                    <img src={"assets/PizzaImg.png"} alt="pizza"/>
                    <button onClick={this.handleDisplayPizza} className='btn btn-pizza'>Pizza</button>
                    {displayPizzas &&
                    <ul className='list-group'>
                        {this.state.products.map(product =>
                            <PizzaChoose id={product.id} name={product.name} price={product.price}
                                         eventClick={this.handleChangePizza}/>)}
                    </ul>}
                    <button onClick={this.handleDisplayExtra} className='btn btn-secondary'>Extras</button>
                    {displayExtras &&
                    <ul className='list-group'>
                        {this.state.extras.map(extra =>
                            <ExtraChoose id={extra.id} name={extra.name} price={extra.price}
                                         eventClick={this.handleChangeExtra}/>)}
                    </ul>}
                    <SizeChoose eventCLick={this.handleChangeSize}/>
                    <button onClick={this.handleDisplayCart} className='btn btn-secondary'>Add to Cart</button>
                </section>
                {displayCart && <Cart/>}
            </>
        )
    }
}