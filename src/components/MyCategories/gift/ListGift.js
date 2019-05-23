import React from 'react';
import ProductItem from './../../MyCart/ProductItem';
import { getProducts_GIFT } from './../../Repo/repoAPI';
import { Link } from 'react-router-dom';

export default class ListGift extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  /*
   return (


   // {products.map((product, index) => <ProductItem product={product} key={index}/>)}
   */
  componentDidMount() {
    getProducts_GIFT().then((products) =>this.setState({ products }));
  }

  render() {
    const { products } =  this.state;
    return (
      <div className=" container">
        <h3 className="card-title">Gift</h3><hr/>


        <div>
          {products.map((product) =>   {

            return <ProductItem product={product} key/>




          })}
        </div>




      </div>
    );
  }



}

