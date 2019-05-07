import React from 'react';
import ProductItem from './../../MyCart/ProductItem';
import { getProducts } from './../../MyCart/repository';
import { Link } from 'react-router-dom';

export default class ListMen extends React.Component {
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
    getProducts().then((products) =>this.setState({ products }));
  }

  render() {
    const { products } =  this.state;
    return (
      <div className=" container">
        <h3 className="card-title">Men</h3><hr/>


        <div>
          {products.map((product) =>   {
            if (product.cat === "men") {
              return <ProductItem product={product} key/>
            }



          })}
        </div>
        



        </div>
        );
        }



}

