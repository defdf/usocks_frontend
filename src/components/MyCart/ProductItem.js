import React from 'react';
import ImageZoom from 'react-medium-image-zoom'
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import frontIMG1 from "../../assets/img/socks/hs1.png";


let testQuan = 1; // Used for testing design with a static 1 as product quantity








export default class ProductItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {quantity: 1}




  }







    handleInputChange = event =>
        this.setState({[event.target.name]: event.target.value})

    addToCart = () => {

        let cart = localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart')) : {};
        let id = this.props.product.id.toString();
        cart[id] = (cart[id] ? cart[id]: 0);
        let qty = cart[id] + parseInt(this.state.quantity);


        if (this.props.product.available_quantity < qty) {
            cart[id] = this.props.product.available_quantity;
        } else {
            cart[id] = qty
        }
        localStorage.setItem('cart', JSON.stringify(cart));






    }

    goToSingleProduct(){


    }









  render(){







        const { product } = this.props;
        return (








          <div className="card" id='myProductCard' style={{ marginBottom: "10px"}}>

                <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>
                  <ImageZoom hei
                             image={ {
                               src: product.image_url,
                               alt: '',
                               className: 'img',
                               style: { width: '10em' }
                             }}
                             zoomImage={{
                               src: product.imgSrc,
                               alt: ''
                             }}
                  />
                  <h5 className="card-text"><small>Price </small>${product.price}</h5>
                    <p className="card-text">{product.description}</p>


                    <div id='someid' onClick={this.goToSingleProduct}>
                      <div>








                      </div>
                    </div>







                    <span className="card-text">
               <small>Available Quantity: </small>{product.available_quantity}
             </span>
                    { product.available_quantity > 0 ?


                        <div>

                          <input type="number" value={this.state.quantity} name="quantity"
                                 onChange={this.handleInputChange} className="float-right"
                                 style={{ width: "60px", marginRight: "10px", borderRadius: "3px"}}/>


                          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"/>
                          <div id="first-child">   <button className="submit" id='addCartButton' onClick={this.addToCart}>Add to cart</button>
                          </div>







                       </div> :
                        <p className="text-danger"> product is out of stock </p>
                    }
                </div>


            </div>


        )
    }
}
