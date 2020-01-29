import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import HeaderPage from "./HeaderPage";

export default class CreatePizza extends Component {
    state = {
        size: ""
    };


    handleChangeSize = (e) => {
        this.setState({
            size: e.target.value
        })
    };

    render() {
        return (
            <>
                <HeaderPage/>
                <section className='section-pizza-choose'>
                    <img src=''/>
                    <NavLink to='PizzaChoose'>
                        <button className='btn btn-pizza'>Pizza</button>
                    </NavLink>
                    <div>
                        <label className="btn btn-size">S
                            <input onChange={this.handleChangeSize} type="radio" value="Small" name="size"/></label>
                        <label className="btn btn-size">M
                            <input onChange={this.handleChangeSize} type="radio" value="Medium" name="size"/></label>
                        <label className="btn btn-size">L
                            <input onChange={this.handleChangeSize} type="radio" value="Large" name="size"/></label>
                    </div>
                    <NavLink to='ExtrasChoose'>
                        <button className='btn btn-secondary'>Extras</button>
                    </NavLink>
                    <NavLink to='Cart'>
                        <button className='btn btn-secondary'>Cart</button>
                    </NavLink>
                </section>
            </>
        )
    }
}