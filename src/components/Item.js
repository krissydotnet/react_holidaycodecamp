import React, { Component } from 'react';

class Item extends Component {
    render() {
        const popupid = this.props.id + '_popup';
        return (
        <div className="menu-item popup" id={this.props.id} >
            <div className="menu-item-container"
            onClick={() => this.props.handleClick(this.props.id)}
            >
            <img src={this.props.src} alt={this.props.name}></img>
            <p className="description">{this.props.name}</p>
            <p className="cost">${this.props.cost}</p>
            <span className="popuptext" id={popupid}>{this.props.review}</span>
            </div>
        <button className="btn" onClick={()=>
                {this.props.orderItem(
                    this.props.id, 
                    this.props.name, 
                    this.props.cost)}}
            >Order</button>
      </div>
        )
    }
}

export default Item;