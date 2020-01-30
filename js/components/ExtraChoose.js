import React, {Component} from 'react';

export default class ExtraChoose extends Component {
    handleChangeExtra = () => {
        const {eventClick, id, name, price} = this.props;
        if (typeof (eventClick) === "function") {
            eventClick(id, name, price);
        }
    };

    render() {
        const {id, name, price} = this.props;
        return (
            <>
                <label className="btn">{name} - {price} zł
                    <input key={id} onChange={this.handleChangeExtra} type="radio" value={name}
                           name="pizzaChose"/></label>
            </>
        )
    }
}