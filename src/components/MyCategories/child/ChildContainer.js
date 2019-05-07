import React, {Component} from 'react';



import ProductsHeader from './../../Products/ProductsHeader';
import MobileNav from './../../global/Mobile/MobileNav';
import Loading from './../../global/Loading';

import {GetProduct} from '../../MyCart/repository';

import ListChild from "./ListChild";


export default class ProductsContainer_Child extends Component {


  render() {



    const {products} = this.props;


    if (!products) {
      return (
        <div>
          <MobileNav/>
          <ProductsHeader/>
          <ListChild/>
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