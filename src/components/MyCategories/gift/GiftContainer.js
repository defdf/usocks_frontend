import React, {Component} from 'react';



import ProductsHeader from './../../Products/ProductsHeader';
import MobileNav from './../../global/Mobile/MobileNav';
import Loading from './../../global/Loading';

import {GetProduct} from '../../MyCart/repository';


import ListGift from "./ListGift";


export default class ProductsContainer_Gift extends Component {


  render() {



    const {products} = this.props;


    if (!products) {
      return (
        <div>
          <MobileNav/>
          <ProductsHeader/>
          <ListGift/>
        </div>
      );
    } else {
      return (
        <div>
          <MobileNav/>
          <ProductsHeader/>
          <Loading/>
        </div>
      );
    }
  }


}