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
            cartExists:false
        }
        this.getCartsData();
    }

    getCartsData = async() => {
        if (this.props.auth.isAuthenticated) {
           await axios.get("/api/cart?id=" + this.props.auth.user.id).then((response) => {
                this.setState({ products: response.data, cartExists:true })
                console.log(this.state.products)
            });
        }
        else {
            this.props.history.push("/login");
        }
    }

    render() {
        return (
            <div className="cart-items">
            {this.state.cartExists ?
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.products.items.map((item) => {
                    return (
                      <tr key={item.productName} >
                        <td></td>
                        <td><Link to={`/product/${item.productID}`}>{item.productName}</Link></td>
                        <td>{numeral(item.productPrice).format('$0,0.00')}</td>
                        <td>{item.quantity}</td>
                        <td>{numeral(item.productPrice * item.quantity).format('$0,0.00')}</td>
                        <td><button title="Remove this item from the cart" onClick={() => this.removeItem(item._id)}>X</button></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table> :
              <h1>No items in the cart.</h1>
            }
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
