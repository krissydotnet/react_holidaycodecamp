import React, { Component } from 'react';
import CloseButton from './CloseButton';

class Confirmation extends Component {
    render() {
        return (
            <div className="modal">
            <section id="confirmation" className="confirmation-container">
            <CloseButton closeWindow={this.props.closeWindow} /> <div className="confirmation-main">
            <h1 className="title">Order Confirmation</h1>
            <p>Your order was received.  Thank you for your order.</p>
            </div>
            
            </section>
            </div>
        )
    }
}

export default Confirmation;