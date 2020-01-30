import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import HeaderPage from "./HeaderPage";

export default class Cart extends Component {
state = {
    cart: this.props.order
};
    handleClickAddMore = () => {
        if(typeof  this.props.eventClick === 'function'){
            this.props.eventClick();
        }
    };

    render() {
        const {order} = this.props;
        return (
            <>
                <section className='cartContainer'>
                    <HeaderPage/>
                    <button onClick={this.handleClickAddMore} className="btn btn-secondary btn-add">Edit</button>
                    <div className='single-order'>
                        <p className='text-price'>{order.pricePizza} zł</p>
                        <div className='single-order-element'>
                            <p className='text-title'>{order.typePizza}</p>
                            <p className='text-title'>{order.sizePizza}</p>
                        </div>
                        {order.typeExtra &&
                        <>
                            <p className='text-price'>{order.priceExtra} zł</p>
                            <div className='single-order-element'>
                                <p className='text-title'>With {order.typeExtra}</p>
                            </div>
                        </>}
                        <button className='btn btn-secondary btn-delete'>Delete</button>
                    </div>
                    <NavLink to='/ConfirmOrderForm'>
                        <button className='btn btn-secondary'>Place Order {order.pricePizza + order.priceExtra}</button>
                    </NavLink>
                </section>
            </>
        )
    }
}