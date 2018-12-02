import React, { Component } from 'react';
import Item from './Item';

class MenuItems extends Component {
    render() {

        return (
            <section id="details">
                <h2>Menu Items</h2>
                <div className="menu-items">
                     {
                        this.props.items.map((item) => 
                        <Item 
                        src={item.image}
                        name={item.name} 
                        id={item.id}
                        key={item.id}
                        cost={item.cost}
                        review={item.review}
                        handleClick={this.props.handleClick}
                        orderItem={this.props.orderItem}
                        />
                        )
                    } 
                    
                   

                </div>

            </section>
        );
    }
}

export default MenuItems;