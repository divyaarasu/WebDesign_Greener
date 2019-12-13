import React from 'react';
import './Products.css';
import { Jumbotron, Carousel, Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import img1 from '../../assets/images/dustbin.jpg'
import img2 from '../../assets/images/bag.jpg'
import img3 from '../../assets/images/bottleProduct.jpg'
import img4 from '../../assets/images/shampoo.jpg'
import img5 from '../../assets/images/detergent.jpg'
import img6 from '../../assets/images/plates.jpg'
import {Link} from  "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { submitProducts } from "../../actions/productsActions";
import { logoutUser } from "../../actions/authActions";
import axios from "axios";



class Products extends React.Component{
  constructor(props){
    super(props)

    this.state={
      products : []
      //products:[]
      // products:[{
      //   title:"",
      //   image1:"",
      //   image2:"",
      //   image3:"",
      //   image4:"",
      //   price:0,
      //   desc1:"",
      //   desc2:"",
      //   desc3:"",
      //   desc4:"",
      //   rating:0,
      //   seller:""
      // },{
      //   title:"",
      //   image1:"",
      //   image2:"",
      //   image3:"",
      //   image4:"",
      //   price:0,
      //   desc1:"",
      //   desc2:"",
      //   desc3:"",
      //   desc4:"",
      //   rating:0,
      //   seller:""
      // },{
      //   title:"",
      //   image1:"",
      //   image2:"",
      //   image3:"",
      //   image4:"",
      //   price:0,
      //   desc1:"",
      //   desc2:"",
      //   desc3:"",
      //   desc4:"",
      //   rating:0,
      //   seller:""
      // },{
      //   title:"",
      //   image1:"",
      //   image2:"",
      //   image3:"",
      //   image4:"",
      //   price:0,
      //   desc1:"",
      //   desc2:"",
      //   desc3:"",
      //   desc4:"",
      //   rating:0,
      //   seller:""
      // },{
      //   title:"",
      //   image1:"",
      //   image2:"",
      //   image3:"",
      //   image4:"",
      //   price:0,
      //   desc1:"",
      //   desc2:"",
      //   desc3:"",
      //   desc4:"",
      //   rating:0,
      //   seller:""
      // },{
      //   title:"",
      //   image1:"",
      //   image2:"",
      //   image3:"",
      //   image4:"",
      //   price:0,
      //   desc1:"",
      //   desc2:"",
      //   desc3:"",
      //   desc4:"",
      //   rating:0,
      //   seller:""
      // }]
    }

    this.getProductsData();
  }

  getProductsData(){

    // const productsData = {
    //   title: this.state.products.title,
    //   image1: this.state.products.image1,
    //   image2: this.state.products.image2,
    //   image3: this.state.products.image3,
    //   image4: this.state.products.image4,
    //   price: this.state.products.price,
    //   desc1:this.state.products.desc1,
    //   desc2: this.state.products.desc2,
    //   desc3: this.state.products.desc3,
    //   desc4: this.state.products.desc4,
    //   rating: this.state.products.rating,
    //   seller: this.state.products.seller
    // };
    // this.props.submitProducts(productsData);

    var products;

    axios
    .get("/api/productsData/submitProducts").then((response) => {

      this.setState({products: response.data})
      
    
  });


  }

  buyNow = () => {
    if (this.props.auth.isAuthenticated)
      this.props.history.push("/buyNow");
    else
      this.props.history.push("/login");
  }

  render() {
    console.log(this.state.products)
    return (
      <div>
        <video class="video-fluid z-depth-1 video-background" autoplay="autoplay" loop="loop" controls="controls" muted="muted" id="vid">
          <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" />
        </video>


    <div class="container mt-5">
      <div className="row">
        {this.state.products.map((p,i) => (
          <div className="col-sm-4 product">
            
              <Card>
              <Link to={{ pathname:"/product",state:{p : p} }} className="link">
              <Card.Img className="imgTop" variant="top" src={this.state.products[i].image1} />
              </Link>
              <Card.Body className="cardBody">
              
                <Card.Title>{this.state.products[i].title}</Card.Title>
                    <Card.Text>
                      {this.state.products[i].desc1}<br/>
                      <i>Seller:</i>{this.state.products[i].seller}
                      <b>{"$"+this.state.products[i].price}</b><br/>
                    </Card.Text>
                    <Button variant="p">Add to Cart</Button>
                    <Button variant="bt" data-toggle="modal" data-target="#exampleModal1">Quick View</Button>
                    <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            {this.state.products[i].title}<br/>
                            <img src={img1} alt="Smiley face" height="320" width="320"></img><br/>
                            {this.state.products[i].desc1}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="secondary" onClick={this.buyNow}>Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div class="modal-body">
        </div>
      </div>
    );
  }
}
Products.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

Products.propTypes = {
  submitProducts: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { submitProducts, logoutUser }
)(Products);

//export default Products;
