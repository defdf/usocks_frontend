import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../assets/img/logo/USocks_Logo.png';

import CartCounter from '../Cart/CartCounter';

class ProductHeader extends Component {
  componentWillMount() {
    const script = document.createElement('script');

    script.src = '../../js/production.min.js';
    script.async = false;

    document.body.appendChild(script);
  }

  render() {
    var ID = this.props.router.location.pathname.slice(9, 100);

    var productArray = this.props.products.products.data.filter(function(
      product
    ) {
      return product.id === ID;
    });

    var product = productArray[0];

    return (
      <header className="push">
        <div className="nav-container">
          <nav className="primary-nav">
            <Link to="/products">Products</Link>
            <Link to="/styles">Styles</Link>

          </nav>
          <div className="logo">
            <Link to="/" className="logo-link">
              <span className="hide-content">I love lamp</span>
              <div className="big-logo" aria-hidden="true">

              <img src = {logo}/>



              </div>
            </Link>
          </div>
          <nav className="secondary-nav">
            <CartCounter />
          </nav>
        </div>
        <div className="header-container hide-content">
          <div className="content">
            <h1>Product details for {product.name}</h1>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProductHeader);
