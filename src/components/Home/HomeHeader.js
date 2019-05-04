import React from 'react';
import { Link } from 'react-router-dom';

import HeaderNav from '../global/HeaderNav';
import * as Header from '../../assets/img/headers/headerpic1.jpg';
import * as testHead from '../../assets/img/unique.png';
import ControlledCarousel from './FrontCarousel'
var HeaderStyle = {
  backgroundImage: `url(${testHead})`,
    //backgroundImage: `url(${Header})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'scroll',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundOrigin: 'border-box'
};

const HomeHeader = props => (
  <header className="large-header light push" style={HeaderStyle}>
    <HeaderNav />
      <ControlledCarousel/>

   /*
    <div className="header-container">
      <div className="content">

        /*<h1>I love socks. I love quality.</h1>
        <Link to="/products" className="btn">
         Usocks Store
        </Link>



      </div>

    </div> */
    /*

    <div className="down-arrow" aria-hidden="true">
      <span className="arrow"> &#10095; </span>
    </div> */
  </header>
);

export default HomeHeader;
