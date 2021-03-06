import React, {Component} from 'react';



import ProductsHeader from './../../Products/ProductsHeader';
import MobileNav from './../../global/Mobile/MobileNav';
import Loading from './../../global/Loading';

import {getProducts} from '../../Repo/repoAPI';
import ListMen from './ListMen';


export default class ProductsContainer_Men extends Component {


  render() {



    const {products} = this.props;


    if (!products) {
      return (
        <div>
          <MobileNav/>
          <ProductsHeader/>
          <ListMen/>
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