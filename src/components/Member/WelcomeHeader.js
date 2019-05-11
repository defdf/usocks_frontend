import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/USocks_Logo.png";
import CartCounter from "../Products/ProductsHeader";
import { connect } from "react-redux";
import React from "react";

import { logout } from "../Repo/repoAPI";








  class WelcomeHeader extends React.Component {
  render() {
  return (
  <header className="push">

  <nav className="primary-nav">
    <Link to="/products">Store</Link>
  <Link to="/acc">Account</Link>

  <Link to="/memOrder">Orders</Link>
  <Link to="/prom">Promotions</Link>


    <a className="nav-item nav-link" href="/"
       onClick={logout}>Log out</a>





  </nav>





  <nav className="secondary-nav">


  </nav>

  </header>
  );
}
}


  export default WelcomeHeader
