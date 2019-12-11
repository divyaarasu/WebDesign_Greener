import React from 'react';
import './Products.css';
import { Jumbotron, Carousel, Card, Button, Container, Row, Col, Modal} from 'react-bootstrap';
import img1 from '../../assets/images/dustbin.jpg'
import img2 from '../../assets/images/bag.jpg'
import img3 from '../../assets/images/bottleProduct.jpg'
import img4 from '../../assets/images/shampoo.jpg'
import img5 from '../../assets/images/detergent.jpg'
import img6 from '../../assets/images/plates.jpg'
import {Link} from  "react-router-dom";
import PropTypes from "prop-types";
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from "react-redux";


class Products extends React.Component{
  constructor(){
    super()
    this.state={
      products:[{
        Title:"Kitchen Compost Bin",
        Img:img1,
        Price:"$"+5,
        Desc:"Instead of the trash can, is a great eco-friendly change to make at home.",
        Rating:4,
        SellerName:"a"
      },{
        Title:"Food Storage Bag",
        Img:img2,
        Price:"$"+6,
        Desc:"Your plastic food-storage bag use stops here. Available in a variety of sizes.",
        Rating:4,
        SellerName:"b"
      },{
        Title:"Hydro Flask",
        Img:img3,
        Price:"$"+15,
        Desc:"A durable, non-disposable water bottle is what you should be using on the daily.",
        Rating:4,
        SellerName:"c"
      },{
        Title:"Bamboo Cutlery Set",
        Img:img4,
        Price:"$"+18,
        Desc:"Disposable flatware is often a double whammy of plastic use wrapped up in even more plastic.",
        Rating:4,
        SellerName:"d"
      },{
        Title:"All Purpose Spaghetti Scrub",
        Img:img5,
        Price:"$"+20,
        Desc:"Goodbye Detergent! This product works astonishingly well, and is much less wasteful.",
        Rating:4,
        SellerName:"e"
      },{
        Title:"Compostable Plates",
        Img:img6,
        Price:"$"+21,
        Desc:"Not only are they just as durable, but they have the added bonus of being dye-free.",
        Rating:4,
        SellerName:"f"
      }]
    }
  }

  buyNow = () => {
    if(this.props.auth.isAuthenticated)
    this.props.history.push("/buyNow");
    else
      {
        this.props.history.push("/login");
      }
  }

  render(){
    return(
        <div>

        <video class="video-fluid z-depth-1 video-background" autoplay="autoplay" loop="loop" controls="controls" muted="muted" id="vid">
        <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" />
        </video>


    <div class="container">
      <div className="row">
        {this.state.products.map((p,i) => (
          <div className="col-sm-4 product">
           
              <Card>
              <Card.Img variant="top" src={this.state.products[i].Img} />
              <Card.Body>
              <Link to="/product" className="link">
                <Card.Title>{this.state.products[i].Title}</Card.Title>
                    <Card.Text>
                      {this.state.products[i].Desc}<br/>
                      <i>Seller:</i>{this.state.products[i].SellerName}
                      <b>{this.state.products[i].Price}</b><br/>
                    </Card.Text>
                    
            </Link>
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
                            {this.state.products[i].Title}<br/>
                            <img src={img1} alt="Smiley face" height="320" width="320"></img><br/>
                            {this.state.products[i].Desc}
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
          
        </div>
      </div>
    </div>
</div>

    
    </div>
    );
  }
}
Products.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
)(withRouter(Products));
