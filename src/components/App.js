import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Cart from './Cart/Cart';
import MyCart from './MyCart/Cart'
import CheckoutContainer from './Checkout/CheckoutContainer';
import StylesContainer from './Styles/StylesContainer';
import ProductsContainer from './Products/ProductsContainer';
import SingleProductContainer from './Products/SingleProductContainer';
import OneClickCheckout from './Checkout/OneClickCheckout';
import OrderConfirmationContainer from './Orders/OrderConfirmationContainer';
import NotFound from './global/NotFound';
// import MobileNav from './global/Mobile/MobileNav';
import Footer from './global/Footer';

import userForm from "./RegisterForm/UserForm";

import cartTest from "./MyCart/MyCartContainer"

import MenContainer from "./MyCategories/men/MenContainer";
import WomenContainer from "./MyCategories/women/WomenContainer";
import ChildContainer from "./MyCategories/child/ChildContainer";

import MyStyleContainer from "./MyStyle/MyStyleContainer";
import LoginContainer from "./LoginForm/LoginContainer";
import RegisterContainer from "./RegisterForm/RegisterContainer";


const App = props => (
  <div>
    {/* <MobileNav /> */}

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart1" component={Cart} />
      <Route path="/styles" component={StylesContainer} />
      <Route path="/myRegister" component={RegisterContainer} />
      <Route path="/myLogin" component={LoginContainer} />
      <Route path="/products" component={ProductsContainer} />
      <Route path="/checkout" component={CheckoutContainer} />
      <Route path="/cartTest" component={cartTest} />
      <Route path="/men" component={MenContainer} />
      <Route path="/women" component={WomenContainer} />
      <Route path="/child" component={ChildContainer} />
      <Route path="/mycart" component={MyCart} />
      <Route path="/myStyle" component={MyStyleContainer} />
      <Route
        path="/order-confirmation"
        component={OrderConfirmationContainer}
      />
      <Route path="/product/:id" component={SingleProductContainer} />
      <Route
        path="/one-click-checkout/:productId"
        component={OneClickCheckout}
      />
      <Route path="*" component={NotFound} />
    </Switch>

    <Footer />
  </div>
);

export default App;
