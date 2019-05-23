import React from 'react';
import ProductItem from './ProductItem';
import { getProducts } from './../Repo/repoAPI';
import { Link } from 'react-router-dom';


export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    getProducts().then((products) =>this.setState({ products }));
  }




  render() {
    const { products } =  this.state;
    return (
      <div className=" container">
        <h3 className="card-title">Top Sales</h3><hr/>
        {products.map((product, index) => <ProductItem product={product} key={index}  />


        )}
        <hr/>


      </div>
    );
  }
}

