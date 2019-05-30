import React from 'react';
import { Link } from 'react-router-dom';
import { getCartProducts } from '../Repo/repoAPI';
import {createOrder} from '../Repo/repoAPI';
import CartItem from './CartItem';
import ProductItem from "./ProductList";
import HeaderNav from "../global/HeaderNav";
import HomeHeader from "../Home/HomeHeader";
import CartHeader from "../Cart/CartHeader";






export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: [], total: 0,}
    }



    componentDidMount() {

      let cart = JSON.parse(localStorage.getItem('cart'));






        if (!cart) return;

       // alert(localStorage.getItem('cart'));
        getCartProducts(cart).then((products) => {






            let total = 0;
            for (var i = 0; i < products.length; i++) {



                total += products[i].price * products[i].qty;

            }
            this.setState({ products, total });



            localStorage.setItem('totalPrice',total);


        });


    }











    removeFromCart = (product) => {
        let products = this.state.products.filter((item) => item.id !== product.id);
        let cart = JSON.parse(localStorage.getItem('cart'));
        delete cart[product.id.toString()];
        localStorage.setItem('cart', JSON.stringify(cart));
        let total = this.state.total - (product.qty * product.price)
        this.setState({products, total});


    }

    clearCart = () => {

        this.setState({products: []});

    };


    checkoutOrder(){





      let cart = JSON.parse(localStorage.getItem('cart'));
      let totalPrice = localStorage.getItem('totalPrice');

      createOrder(totalPrice,cart);



    };

  render() {
    const{products,total} = this.state;




//


    return (





      <div className=" container">
          <CartHeader/>
        <h3 className="card-title">----------------</h3>

        {products.map((product, index) =><CartItem product={product} remove={this.removeFromCart} key={index}/>)}

        { products.length ?
          <div><h4>
            <small>Total Amount: </small>
            <span className="float-right text-primary">${total}</span>
          </h4><hr/></div>: ''}
        { !products.length ?<h3 className="text-warning">No item on the cart</h3>: ''}

          <button className="btn btn-success float-right" onClick={this.checkoutOrder} id='orderButton'  >Proceed with order</button>
        <button onClick={this.clearCart}  > clear cart </button>
        <br/><br/><br/>
      </div>
    );
  }
}

