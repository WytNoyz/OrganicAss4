import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCartCounter } from './../../store/actions/actions';
import ProductInCart from '../productInCart/productInCart';

class Cart extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <h1>In your Cart!</h1>
                {this.props.cart.map(p => <ProductInCart data={p} key={p.product.id}></ProductInCart>)}
                 
            </div>
            );
    }

    handleButtonClick = () => {
        console.log("Clicked!!!")
        this.props.incrementCartCounter();
    }
}
const mapStatetoProps = (state) => {
    return{
        cart: state.cart
    }
};


export default connect(mapStatetoProps, { incrementCartCounter })(Cart);