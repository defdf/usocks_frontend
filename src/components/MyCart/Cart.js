import React from 'react';

import { getCartProducts, createOrder } from "../Repo/repoAPI";

import CartItem from './CartItem';

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
      delete cart[product.id];
        localStorage.setItem('cart', JSON.stringify(cart));
        let total = this.state.total - (product.qty * product.price)
        this.setState({products, total});


    }

    clearCart = () => {


      this.setState({ products: [], total: 0 });


    };


    checkoutOrder(){

      let items = [];


      alert(localStorage.getItem("cart"));

      let cart = JSON.parse(localStorage.getItem('cart'));
      let totalPrice = localStorage.getItem('totalPrice');


      getCartProducts(cart).then((products) => {


        let total = 0;
        for (var i = 0; i < products.length; i++) {


          total += products[i].price * products[i].qty;


          let item = {
            id: i + 1,
            qty: products[i].qty,
            unitPrice: products[i].price
          };
          items.push(item);
          // alert(i+" Price :"+products[i].price.toString());
          //alert(i+" quantity :"+products[i].qty.toString());

        }

        /*

                for (var i = 0; i < items.length; i++) {
                  alert("Price (items)"+i+": " +items[i].unitPrice);
                  alert("Quantity(items)"+i+": " +items[i].qty);
                  alert("ID(items)"+i+": " +items[i].id);
                  //Do something
                }
        */

        createOrder(totalPrice, cart, items);

      });


      // createOrder(totalPrice,cart,items);



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

