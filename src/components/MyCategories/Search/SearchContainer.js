import React, {Component} from 'react';



import ProductsHeader from './../../Products/ProductsHeader';
import MobileNav from './../../global/Mobile/MobileNav';
import Loading from './../../global/Loading';




import Search from "../../MySearch/Search";


export default class SearchContainer extends Component {


  render() {



    const {products} = this.props;


    if (!products) {
      return (
        <div>
          <MobileNav/>
          <ProductsHeader/>
          <Search/>
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