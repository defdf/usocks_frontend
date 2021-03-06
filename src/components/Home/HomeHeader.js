import React from 'react';
import { Link } from 'react-router-dom';

import HeaderNav from '../global/HeaderNav';
import * as Header from '../../assets/img/headers/headerpic1.jpg';
import * as testHead from '../../assets/img/headers/socksHeader8.png';
import ControlledCarousel from './FrontCarousel'
var HeaderStyle = {
 // backgroundImage: `url(${testHead})`,
  //backgroundImage: `url(${Header})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'scroll',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundOrigin: 'border-box',
 backgroundColor:'white'
};

const HomeHeader = props => (
  <header className="large-header light push" style={HeaderStyle}>

    <HeaderNav />
      <ControlledCarousel/>


  </header>
);

export default HomeHeader;
