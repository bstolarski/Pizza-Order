import React, {Component} from 'react';
import HeaderPage from "./HeaderPage";
import {PizzaChoose} from "./PizzaChoose";
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
        displayImg: true,
        products: null,
        extras: null,
        err: null,
        error: null,
        currentChoosePizza: null,
        currentChooseExtra: {
            name: null,
            price: null
        },
        currentChooseSize: "Small",
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
        const {currentChoosePizza, currentChooseExtra, currentChooseSize} = this.state;
        if (currentChoosePizza === null) {
            this.setState({
                error: "You have to choose pizza!"
            })
        } else {
            this.setState({
                order: {
                    typePizza: currentChoosePizza.name,
                    pricePizza: currentChoosePizza.price,
                    typeExtra: currentChooseExtra.name,
                    priceExtra: currentChooseExtra.price,
                    sizePizza: currentChooseSize
                }
            });
            this.setState({
                displayCart: !this.state.displayCart
            });
        }
    };

    handleHideCart = () => {
        this.setState({
            displayCart: false,
        })
    };

    handleDisplayPizza = () => {
        this.setState({
            displayPizzas: !this.state.displayPizzas,
            displayImg: !this.state.displayImg
        });
        if (this.state.displayExtras) {
            this.setState({
                displayExtras: false
            })
        }
    };

    handleDisplayExtra = () => {
        this.setState({
            displayExtras: !this.state.displayExtras,
            displayImg: !this.state.displayImg
        });
        if (this.state.displayPizzas) {
            this.setState({
                displayPizzas: false
            })
        }
    };

    handleChangeSize = (size) => {
        this.setState({
            currentChooseSize: size
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
        const {displayPizzas, displayExtras, displayCart, displayImg} = this.state;
        return (
            <>
                <section className='cartContainer'>
                    <HeaderPage/>
                    {displayImg && <img src={"assets/PizzaImg.png"} alt="pizza"/>}
                    <button onClick={this.handleDisplayPizza} className='btn btn-pizza'>Pizza</button>
                    {displayPizzas &&
                    <ul className='list-elements'>
                        {this.state.products.map(product =>
                            <PizzaChoose id={product.id} name={product.name} price={product.price}
                                         eventClick={this.handleChangePizza}/>)}
                    </ul>}
                    <button onClick={this.handleDisplayExtra} className='btn btn-secondary'>Extras</button>
                    {displayExtras &&
                    <ul className='list-elements'>
                        {this.state.extras.map(extra =>
                            <ExtraChoose id={extra.id} name={extra.name} price={extra.price}
                                         eventClick={this.handleChangeExtra}/>)}
                    </ul>}
                    <SizeChoose eventClick={this.handleChangeSize}/>
                    <button onClick={this.handleDisplayCart} className='btn btn-secondary'>Add to Cart</button>
                    {!this.state.currentChoosePizza && <p className='error'>{this.state.error}</p>}
                </section>
                {displayCart && <Cart order={this.state.order} eventClick={this.handleHideCart} />}
            </>
        )
    }
}