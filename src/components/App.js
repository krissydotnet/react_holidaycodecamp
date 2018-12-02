import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import MenuItems from './MenuItems';
import ItemDetails from './ItemDetails';
import ShoppingCart from './ShoppingCart';
import Confirmation from './Confirmation';

class App extends Component {
  state = {
    menuItems: [
      {
        id: "creamcheese",
        name: "Frosted Creamcheese Cupcake",
        cost: 2.99,
        image: "https://drive.google.com/uc?export=view&id=1uoH1X_pcjLDxgF8MHajQYZnZjL08UMze",
        review: "Best you've ever had.",
        description: "Decedent red velvet cupcake with cream cheese icing"
      },
      {
        id: "spice",
        name: "Pumpkin Spice Cupcake",
        cost: 2.99,
        image: "https://drive.google.com/uc?export=view&id=1OO48GolmtdqT72EaI0-nbNVsgWDsugY2",
        review: "They're great!!!!",
        description: "Decedent red velvet cupcake with cream cheese icing"
      },
      {
        id: "brulee",
        name: "Caramel Brulee Cupcake",
        cost: 2.99,
        image: "https://drive.google.com/uc?export=view&id=1WXE-dkglsk6aE7DaPhnkdCNmhBLsajvi",
        review: "These are the best cupcakes",
        description: "Decedent red velvet cupcake with cream cheese icing"
      },
    ],
    orderTotal: 2.99,
    itemDesc: "Cupcake",
    itemPrice: 2.99,
    itemId: 0,
    quantity: 1,
    isItemDetailsHidden: true,
    isShoppingCartHidden: true,
    isConfirmationHidden: true,
    shoppingCart: []
  }
  showPopup= (id) => {
    const popup = document.getElementById(id + '_popup');
    popup.classList.toggle("show");
  }

  calculateTotal = (newQuantity) => {
    this.setState( prevState => ({
      quantity: parseInt(newQuantity),
      orderTotal: ((prevState.itemPrice * 100) * newQuantity/100)
    }));

  }
   handleOrderItem = (id, name, cost) => {


    this.setState( prevState => (
    {
      quantity: 1,
      orderTotal: cost,
      itemDesc: name,
      itemId: id
    }
    
  ))
    this.toggleItemDetailsHidden();

  }
  

  toggleItemDetailsHidden = () => {
    this.setState( prevState => ({
        isItemDetailsHidden: !prevState.isItemDetailsHidden
    }))
  }
  toggleShoppingCartHidden = () => {
    this.setState( prevState => ({
        isShoppingCartHidden: !prevState.isShoppingCartHidden
    }))
  }
  toggleConfirmationHidden = () => {
    this.setState( prevState => ({
        isConfirmationHidden: !prevState.isConfirmationHidden
    }))
  }

  handleAddToCart = (item, itemQuantity) => {
    this.setState ( prevState => {
      return {
       shoppingCart: [
         ...prevState.shoppingCart,
         {
          itemId: item.id, 
          itemName: item.name,
          quantity: itemQuantity,
          cost: item.cost
         }
       ]
      }
    
    })
    this.toggleItemDetailsHidden();
  }

  handleCloseWindow = () => {
    this.toggleItemDetailsHidden();

  }

  handleOpenShoppingCart = () => {

    this.toggleShoppingCartHidden();
  }

  getSelectedItem = (itemId) => {
    return this.state.menuItems.find((element) => {
      return element.id === itemId;
    })
  }
  clearShoppingCart = () => {
    this.setState ( prevState => {
      return {
       shoppingCart: []
      }
    })
  }
  handleSubmitOrder = () => {
    this.clearShoppingCart();
    this.toggleShoppingCartHidden();
    this.toggleConfirmationHidden();
  }
  render() {
    
    return (
      <div className="App">
    
        <Header name="Erica’s Cupcakery" slogan="#1 Bakery in PA!" shoppingCart={this.state.shoppingCart}
        openShoppingCart={this.handleOpenShoppingCart}
        />
        
        <div className="main-container">
          
          {/* Main  */}
          <div className="container">
          <Menu items={this.state.menuItems}/>
          <MenuItems items={this.state.menuItems} handleClick={this.showPopup}
          orderItem={this.handleOrderItem}
          />
          </div>

          {/* Item Details */}
          {!this.state.isItemDetailsHidden && 
          <ItemDetails 
          item={this.getSelectedItem(this.state.itemId)}
          itemId={this.state.itemId}
          orderTotal={this.state.orderTotal}
          quantity={this.state.quantity} 
          changeQuantity={this.calculateTotal}
          addToCart={this.handleAddToCart}
          closeWindow={this.handleCloseWindow}
          />}

          {/* Shopping Cart*/}
          {!this.state.isShoppingCartHidden && 
          <ShoppingCart  
          shoppingCart={this.state.shoppingCart}
          closeWindow={this.toggleShoppingCartHidden}
          submitOrder=
          {this.handleSubmitOrder}
          />
          }

          {/* Confirmation*/}
            {!this.state.isConfirmationHidden && 
          <Confirmation  
          closeWindow={this.toggleConfirmationHidden}
          />
          }
         
         </div>
      </div>
    );
  }
}

export default App;
