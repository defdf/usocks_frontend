import React from 'react';
import product from './ProductItem'
import MyCartContainer from "./MyCartContainer";

export default class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quantity: 1}
  }


    render(){
      const { product } = this.props;
      return (
        <div className="card" style={{ marginBottom: "10px"}}>
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <img src={product.imgSrc} height="42" width="42" />
            <h5 className="card-text"><small>price: </small>${product.price}</h5>
            <span className="card-text text-success">
                  <small>Quantity: </small>{product.qty}</span>
            <button className="submit" id='removeMyCartButton'
                    onClick={() => this.props.remove(product)}>Remove from cart</button>
          </div>
        </div>
      )
    }
  }