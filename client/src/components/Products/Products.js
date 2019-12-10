import React from 'react';
import './Products.css';
import { Jumbotron, Carousel, Card, Button, Container, Row, Col } from 'react-bootstrap';

class Products extends React.Component{
  render(){
    return(
        <div>

        <video class="video-fluid z-depth-1 video-background" autoplay="autoplay" loop="loop" controls="controls" muted="muted" id="vid">
        <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" />
        </video>
            
        <div class="container">
          <div class="row">
            <div class="col-sm product">
                <Card>
                <Card.Img variant="top" src="../../assets/images/bottleProduct.jpg"/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div class="col-sm product">
                <Card>
                <Card.Img variant="top" src="../../assets/images/bottleProduct.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div class="col-sm product">
                <Card>
                <Card.Img variant="top" src="../../assets/images/bottleProduct.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card> 
            </div>
          </div>

          <div class="row">
            <div class="col-sm rP">
                <Card>
                <Card.Img variant="top" src="../../assets/images/bottleProduct.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div class="col-sm rP">
                <Card>
                <Card.Img variant="top" src="../../assets/images/bottleProduct.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div class="col-sm rP">
                <Card>
                <Card.Img variant="top" src="../../assets/images/bottleProduct.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card> 
            </div>
          </div>
        </div>

        </div>
    );
  }
}

export default Products;