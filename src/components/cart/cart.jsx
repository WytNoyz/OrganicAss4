import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCartCounter } from './../../store/actions/actions';

class Cart extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <h1>This is the cart</h1>;
                <button className="btn btn-warning" onClick={this.handleButtonClick}>Click Me!</button>;
            </div>
            );
    }

    handleButtonClick = () => {
        console.log("Clicked!!!")
        this.props.incrementCartCounter();
    }
}
 
export default connect(null, { incrementCartCounter })(Cart);