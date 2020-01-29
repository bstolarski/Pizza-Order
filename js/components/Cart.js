import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class ListElement extends Component {

    handleChangePizza = () => {
        const {eventClick, id, name, price} = this.props;
        if (typeof (eventClick) === "function") {
            eventClick(id, name, price);
        }
    };

    render() {
        const {id, name, price} = this.props;
        return (
            <>
                <label key={id} className="btn">{name} - {price} zł
                    <input onChange={this.handleChangePizza} type="radio" value={name} name="pizzaChose"/></label>
            </>
        )
    }
}