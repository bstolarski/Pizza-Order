import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import HeaderPage from "./HeaderPage";

export default class Cart extends Component {
    state = {
        cart: null
    };

    render() {
        const {order} = this.props;
        return (
            <>
                <section className='cartContainer'>
                    <HeaderPage/>
                    <button className="btn btn-plus btn-add">+</button>
                    <div className='single-order'>
                        <p className='text-price'>{order.pricePizza} zł</p>
                        <div className='single-order-element'>
                            <p className='text-title'>{order.typePizza}</p>
                            <p className='text-title'>{order.sizePizza}</p>
                        </div>
                        {order.priceExtra && <p className='text-price'>{order.priceExtra} zł</p>}
                        <div className='single-order-element'>
                            {order.typeExtra && <p className='text-title'>{order.typeExtra}</p>}
                        </div>
                        <button className='btn btn-secondary btn-delete'>Delete</button>
                    </div>
                    <NavLink to='/ConfirmOrderForm'>
                        <button className='btn'>Place Order Suma zamówienia</button>
                    </NavLink>
                </section>
            </>
        )
    }
}