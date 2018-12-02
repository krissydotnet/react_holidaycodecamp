import React, { Component } from 'react';

class ItemDetails extends Component {


    handleChange = (e) => {
       
        const newValue = e.target.value;
        if (newValue > 0) {
             this.props.changeQuantity(newValue)
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addToCart(this.props.itemId, this.props.quantity, this.props.cost);
        e.currentTarget.reset();
    }

    render() {
        const menuItem = this.props.items.find(item => (item.itemId === this.props.itemId))
        console.log(this.props.menuItem);
        console.log(this.props.itemId)
        const name = "Red Velvet Cupcake";
        const image = "https://drive.google.com/uc?export=view&id=1WXE-dkglsk6aE7DaPhnkdCNmhBLsajvi";
        const description = "Decedent red velvet cupcake with cream cheese icing";
        const cost = 2.99
        const quantity = 1


        return (
            <section id="item-details" className="item-details-container">
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
                    <p className="item-quantity">Quantity:
                    <input type="number"  
                             defaultValue={1}
                             onChange={this.handleChange}
                             min={1}
                             ></input>
                    </p>
       

                    <p className="total">Total: $<span id="total">{this.props.orderTotal}</span></p>
                    <button className="btn">Add to Cart</button>
                    </div>



                </div>
                </form>
            </section>
        )
    }
}

export default ItemDetails;