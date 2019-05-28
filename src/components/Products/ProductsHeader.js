import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../assets/img/logo/USocks_Logo.png';

import CartCounter from '../Cart/CartCounter';



class ProductsHeader extends Component {
  render() {
    return (
      <header className="push">
        <div className="nav-container">
          <nav className="primary-nav">

            <Link to="/products">Top Sell</Link>

            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/child">Child</Link>
            <Link to="/gift">Gift</Link>
            <Link to="/search">Search</Link>
            <Link to="/myStyle">Styles</Link>





          </nav>
          <div className="logo">

            <Link to="/" className="logo-link">
              <span className="hide-content">I</span>
              <div className="big-logo" aria-hidden="true">
              <img src = {logo}/>
              </div>
              <div className="small-logo" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 54">
                  <path fill="currentColor" d="M28.2,48.2V6.4h4.7v41.8H28.2z" />
                  <path
                    fill="currentColor"
                    d="M150.4,48.2V6.4h4.7v37.5h17.2v4.3H150.4z"
                  />
                  <path
                    fill="currentColor"
                    d="M199.5,48.2l17.7-41.8h3.6l17.7,41.8h-5l-4.3-10.3h-20.3l-4.3,10.3H199.5z M210.7,33.6h16.7L219,13.7
   		L210.7,33.6z"
                  />
                  <path
                    fill="currentColor"
                    d="M270.1,48.2V6.4h4.3l16,26.5l16-26.5h4.3v41.8H306V15.7l-15.6,25.6l-15.7-25.5v32.5H270.1z"
                  />
                  <path
                    fill="currentColor"
                    d="M345.7,48.2V6.4h13.4c3.5,0,6.6,1.2,9.1,3.7c2.5,2.4,3.7,5.4,3.7,9.1c0,3.7-1.3,6.7-3.7,9.1
   		c-2.5,2.4-5.5,3.6-9.1,3.6h-8.7v16.4H345.7z M350.4,27.5h8.5c2.3,0,4.3-0.8,5.9-2.4c1.6-1.6,2.4-3.6,2.4-6s-0.8-4.4-2.4-6
   		c-1.6-1.6-3.5-2.4-5.9-2.4h-8.5V27.5z"
                  />
                  <path
                    fill="currentColor"
                    d="M116.1,18.3c0,3.2-1.2,6.4-3.7,8.8l-21,21l-21-21c-4.9-4.9-4.9-12.8,0-17.7c2.4-2.4,5.6-3.7,8.9-3.7
   		c3.2,0,6.4,1.2,8.8,3.7l3.3,3.3l3.3-3.3c4.9-4.9,12.8-4.9,17.7,0C114.8,11.9,116.1,15.1,116.1,18.3z"
                  />
                </svg>
              </div>
            </Link>
          </div>

          <nav className="secondary-nav">

            <CartCounter />
          </nav>
        </div>
        <div className="header-container hide-content">
          <div className="content">
            <h1></h1>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProductsHeader);
