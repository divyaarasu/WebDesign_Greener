import React from 'react';
import './Products.css';
import { Jumbotron, Carousel, Card, Button, Container, Row, Col } from 'react-bootstrap';

class Products extends React.Component{
  constructor(){
    super()
    this.state={
      products:[{
        Title:"Kitchen Compost Bin",
        Img:"../../assets/images/dustbin.jpg",
        Desc:"Instead of the trash can, is a great eco-friendly change to make at home.",
        Rating:4,
        SellerName:"a"
      },{
        Title:"Food Storage Bag",
        Img:"../../assets/images/bag.jpg",
        Desc:"Your plastic food-storage bag use stops here. Available in a variety of sizes.",
        Rating:4,
        SellerName:"b"
      },{
        Title:"Hydro Flask",
        Img:"../../assets/images/bottleProduct.jpg",
        Desc:"A durable, non-disposable water bottle is what you should be using on the daily.",
        Rating:4,
        SellerName:"c"
      },{
        Title:"Bamboo Cutlery Set",
        Img:"../../assets/images/shampoo.jpg",
        Desc:"Disposable flatware is often a double whammy of plastic use wrapped up in even more plastic.",
        Rating:4,
        SellerName:"d"
      },{
        Title:"All Purpose Spaghetti Scrub",
        Img:"../../assets/images/detergent.jpg",
        Desc:"Goodbye Detergent! This product works astonishingly well, and is much less wasteful.",
        Rating:4,
        SellerName:"e"
      },{
        Title:"Compostable Plates",
        Img:"../../assets/images/plates.jpg",
        Desc:"Not only are they just as durable, but they have the added bonus of being dye-free.",
        Rating:4,
        SellerName:"f"
      }]
    }
  }

  

  render(){
    return(
        <div>

        <video class="video-fluid z-depth-1 video-background" autoplay="autoplay" loop="loop" controls="controls" muted="muted" id="vid">
        <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" />
        </video>


    <div class="container">
        {this.state.products.map((p,i) => (
          ((i+1)%4==0) ? (<div className="row">
          <div className="col-sm-3 product">
              Hey!
              </div>
            </div>) : (<div className="col-sm-3 product">
              Hey!
            </div>)
        ))}
      </div>
      </div>
    );
  }
}

export default Products;