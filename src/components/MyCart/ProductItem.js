import React from 'react';
import ImageZoom from 'react-medium-image-zoom'













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
        let qtyLocal = cart[id] + parseInt(this.state.quantity);





        if (this.props.product.qty < qtyLocal) {
            cart[id] = this.props.product.qty;
        } else {
            cart[id] = qtyLocal
        }


        localStorage.setItem('cart', JSON.stringify(cart));




    }


/*

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
 */









  render(){







        const { product } = this.props;
        return (








          <div className="card" id='myProductCard' style={{ marginBottom: "10px"}}>

                <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>
                  <ImageZoom hei
                             image={ {
                               src: product.imageUrl,
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
               <small>Available Quantity: </small>{product.qty}
             </span>
                    { product.qty > 0 ?


                        <div>




                          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"/>
                          <div id="first-child">   <button className="submit" id='addCartButton' onClick={this.addToCart}>Add to cart</button>
                            <input type="number" value={this.state.quantity} name="quantity"
                                   onChange={this.handleInputChange} className="float-right"
                                   style={{ width: "60px", marginRight: "10px", borderRadius: "3px"}}/>
                          </div>







                       </div> :
                        <p className="text-danger"> product is out of stock </p>
                    }
                </div>


            </div>


        )
    }
}
