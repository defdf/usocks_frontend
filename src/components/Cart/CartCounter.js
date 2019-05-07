import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { getCartProducts } from "../MyCart/repository";
var quantity;
class CartCounter extends Component {


  constructor(props) {
    super(props);
    this.state = { products: [], total: 0 }
  }

  componentDidMount() {
    let cart = localStorage.getItem('cart');
    if (!cart) return;
    getCartProducts(cart).then((products) => {
      let total = 0;
      for (var i = 0; i < products.length; i++) {
        total += products[i].price * products[i].qty;
      }
      this.setState({ products, total });
    });
  }

  render() {
    ;


    let cart = localStorage.getItem('cart');
    if (!cart) return;
    getCartProducts(cart).then((products) => {

       quantity= products.length;}
    )







    return (
      <Link to="/mycart" className="cart" aria-live="polite">
        <span className="cart-name" aria-hidden="true">
          Cart (
        </span>
        <span className="hide-content">The cart contains </span>
        <span className="cart-count">{quantity}</span>
        <span className="hide-content">items</span>
        <span className="cart-name" aria-hidden="true">
          )
        </span>
      </Link>
    );
  }
}




export default CartCounter;
