import * as React from "react";

import { getProducts } from './../Repo/repoAPI';
import ProductItem from "../MyCart/ProductItem";



export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      products: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {

    getProducts().then((products) =>this.setState({ products }));


    this.refs.search.focus();
  }

  handleChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }

  render() {
    let _products = this.state.products;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      _products = _products.filter(function(product) {
        return product.name.toLowerCase().match(search);
      });
    }

    return (
      <div>
        <h3>Usocks - Search</h3>
        <div>
          <input
            type="text"
            value={this.state.searchString}
            ref="search"
            onChange={this.handleChange}
            placeholder="type name here"
          />
          <ul>
            {_products.map(l => {

              return (



                <li>

                  <ProductItem product={l} />

                </li>
              );
            })}
          </ul>

        </div>
      </div>
    );
  }
}

