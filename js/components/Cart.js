import React, {Component} from 'react';
import HeaderPage from "./HeaderPage";
import ConfirmOrderForm from "./ConfirmOrderForm";

export default class Cart extends Component {
    state = {
        cart: this.props.order,
        displayConfirm: false
    };
    handleClickAddMore = () => {
        if (typeof this.props.eventClick === 'function') {
            this.props.eventClick();
        }
    };
    handleDisplayConfirm = () => {
        this.setState({
            displayConfirm: !this.state.displayConfirm
        });
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
                    </div>
                    <button onClick={this.handleDisplayConfirm} className='btn btn-secondary'>Place
                        Order {order.pricePizza + order.priceExtra}</button>
                </section>
                {this.state.displayConfirm && <ConfirmOrderForm order={this.state.cart}/>}
            </>
        )
    }
}