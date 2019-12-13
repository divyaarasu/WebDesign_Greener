import React from 'react';
import axios from "axios";
import './Products.css';
import * as numeral from 'numeral';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Link} from  "react-router-dom";

class Cart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            cartExists:false,
            cartTotal:0
        }
        this.getCartsData();
    }

    getCartsData = async() => {
        if (this.props.auth.isAuthenticated) {
          var add = 0;
           await axios.get("/api/cart?id=" + this.props.auth.user.id).then((response) => {
                this.setState({ products: response.data, cartExists:true })
                this.state.products.items.map((item) => {
                add = add + (item.productPrice * item.quantity); 
                });
                this.setState({ cartTotal: numeral(add).format('$0,0.00')});
              });
        }
        else {
            this.props.history.push("/login");
        }
    }

    render() {
        return (
          <div className="container cart-container">
        <h1>Your Cart</h1>
        <div className="cart">
       
            <div className="cart-items">
            {this.state.cartExists ?
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.products.items.map((item) => {
                    return (
                      <tr key={item.productName} >
                        <td></td>
                        <td>{item.productName}</td>
                        <td>{numeral(item.productPrice).format('$0,0.00')}</td>
                        <td>{item.quantity}</td>
                        <td>{numeral(item.productPrice * item.quantity).format('$0,0.00')}</td>
                        <td><button title="Remove this item from the cart" onClick={() => this.removeItem(item._id)}><i className="fa fa-trash"></i></button></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table> :
              <h1>No items in the cart.</h1>
            }
            </div>
            <div className="cart-info">
             <p>
               <strong> Total amount: 
                {this.state.cartExists ? (<span className="total"> {this.state.cartTotal}</span>) : ''}</strong>
              </p>
              <button type="button"
                onClick={() => this.setActiveModal('checkout')}
                className="btn btn-info"
                disabled={!this.state.cartExists}
              >Checkout</button>
              <button type="Button"
                onClick={() => this.setActiveModal('dialog')}
                className="btn btn-danger"     
                disabled={!this.state.cartExists}
              > Empty cart</button>
          
          </div>
            </div>
            </div>
        );
    }
}
Cart.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Cart);
