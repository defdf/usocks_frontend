import MobileNav from "../MyCategories/child/ChildContainer";
import StyleGallery from "./StyleGallery";
import HomeHeader from "../Home/HomeHeader";
import React from 'react';
import HeaderNav from "../global/HeaderNav";
import ProductHeader from "../Products/ProductHeader";
import ProductsHeader from "../Products/ProductsHeader";
export default class MyStyleContainer extends React.Component {


  render() {


    return (
      <div>
        <ProductsHeader/>
     
        <StyleGallery/>
      </div>
    );
  }


  ;
}



