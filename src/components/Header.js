import React, { Component } from 'react';
import ShoppingCartIcon from './ShoppingCartIcon';

class Header extends Component {

    openAlert = () => {
        alert('Warning! Most Delicious Cupcakes!');
    }

    render() {
        return (
                <header>
                <h1><i className="fas fa-mortar-pestle"></i>{this.props.name}</h1>
                <button id="message" onClick={this.openAlert}>{this.props.slogan}</button>
                <ShoppingCartIcon 
                    shoppingCart={this.props.shoppingCart} 
                    openShoppingCart={this.props.openShoppingCart}/>
                </header>
        );
    }
}

export default Header;