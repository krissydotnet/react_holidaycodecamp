import React, { Component } from 'react';

class ShoppingCartIcon extends Component {
    render() {
        const totalItems = this.props.shoppingCart.length;

        return (
            <button id="shopping_cart" onClick={this.props.openShoppingCart}>
            <i className="fas fa-shopping-cart"></i>
            <span className="cart_quantity"
            >{totalItems}</span>
            </button>
        )
    }
}

export default ShoppingCartIcon;