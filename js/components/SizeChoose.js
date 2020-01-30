import React, {Component} from 'react';

export class SizeChoose extends Component {

    handleChangeSize = () => {
        const {eventClick, e} = this.props;
        if (typeof (eventClick) === "function") {
            eventClick(e.target.value);
        }
    };

    render() {
        return (
            <div>
                <label className="btn btn-size">S
                    <input onChange={this.handleChangeSize} type="radio" value="Small" name="size"/></label>
                <label className="btn btn-size">M
                    <input onChange={this.handleChangeSize} type="radio" value="Medium"
                           name="size"/></label>
                <label className="btn btn-size">L
                    <input onChange={this.handleChangeSize} type="radio" value="Large" name="size"/></label>
            </div>
        )
    }
}






