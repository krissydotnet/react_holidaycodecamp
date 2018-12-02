import React, { Component } from 'react';
import CloseButton from './CloseButton';

class ItemDetails extends Component {


    handleChange = (e) => {
       
        const newValue = e.target.value;
        if (newValue > 0) {
             this.props.changeQuantity(newValue)
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addToCart(this.props.item, this.props.quantity);
        e.currentTarget.reset();
    }

    render() {
        const name = this.props.item.name;
        const image = this.props.item.image;
        const description = this.props.item.description;
        const cost = this.props.item.cost;
        const quantity = this.props.quantity;


        return (
            <div className="modal">
            <section id="item-details" className="item-details-container">
                <CloseButton closeWindow={this.props.closeWindow} />
            <div className="item-details-main">
                <h1 className="title">Item Details</h1>
                <form onSubmit={this.handleSubmit}>
                <div className="item-details">
                    <div className="details-left">
                    <img className="item-image" src={image} alt={name}/></div>
                    <div className="details-right">

                    <h3 className="item-name">{name}</h3>
                    <p className="item-description">{description}</p>
                    <p className="item-price" 
                    data-price={cost}>Price: ${cost}</p>
                    <p className="item-quantity"><label >Quantity:</label>
                    <input type="number"  
                             defaultValue={1}
                             onChange={this.handleChange}
                             min={1}
                             name="quantity"
                             id="quantity"
                             ></input>
                    </p>
       

                    <p className="total">Total: $<span id="total">{this.props.orderTotal}</span></p>
                    <button className="btn">Add to Cart</button>
                    </div>



                </div>
                </form>
                </div>
            </section>
            </div>
        )
    }
}

export default ItemDetails;