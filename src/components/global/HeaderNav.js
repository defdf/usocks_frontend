import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo/USocks_Logo.png';
import CartCounter from '../Cart/CartCounter';




const HeaderNav = () => (

  <div className="nav-container">

    <nav className="primary-nav light">
        <Link to="/loginform">Log in</Link>
      <Link to="/products">Products</Link>
      <Link to="/myStyle">Styles</Link>
        <Link to="/userform">Register User</Link>


    </nav>



    <div className="logo light">
      <Link to="/" className="logo-link">
        <span className="hide-content">d</span>
        <div className="big-logo" aria-hidden="true">
          <img
            className="small-logo"
            src="img/logo/ill-short-dark.svg"
            alt="I love lamp logo"
            aria-hidden="true"
          />



        <img src = {logo}/>

        </div>

      </Link>
    </div>
    <nav className="secondary-nav light">
      <CartCounter />

    </nav>

  </div>
);

export default HeaderNav;
