import React from 'react';
import product from './ProductItem'
import MyCartContainer from "./MyCartContainer";

import Select from 'react-select';

const options = [

  { value: 'XXL', label: 'XXL' },
  { value: 'XL', label: 'XL' },
  { value: 'Large', label: 'L' },
  { value: 'Medium', label: 'M' },
  { value: 'Small', label: 'S' }
];

export default class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quantity: 0};
    this.state = {selectedOption: 'L',}
  }


  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

    render(){
      const { product } = this.props;
      const { selectedOption } = this.state;
      return (
        <div className="card" style={{ marginBottom: "10px"}}>
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <img src={product.imgSrc} height="42" width="42" />
            <h5 className="card-text"><small>price: </small>${product.price}</h5>
            <span className="card-text text-success">
                  <small>Quantity: </small>{product.qty}</span>
            <br/>size:         <Select id='selectBox'
                                       value={selectedOption}
                                       onChange={this.handleChange}
                                       options={options}
          />
            <button className="submit" id='removeMyCartButton'
                    onClick={() => this.props.remove(product)}>Remove from cart</button>
          </div>
        </div>
      )
    }
  }