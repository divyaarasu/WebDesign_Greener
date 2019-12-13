import React from 'react';
import { Grid, Card, Carousel, Dropdown, Form, Media, Button } from 'react-bootstrap';
import './Products.css';
import img from '../../assets/images/cardLayoutportal.jpg'
import img1 from '../../assets/images/bambooCar1.jpg'
import img2 from '../../assets/images/bambooCar2.jpg'
import img3 from '../../assets/images/bambooCar3.jpg'
import Products from '../Products/Products'



class Product extends React.Component {
    constructor(props){
        super(props);

        this.state={
            products:props.location.state.p
        }
        const products = props.location.state.p
        console.log(products);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={this.state.products.image1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={this.state.products.image2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={this.state.products.image3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={this.state.products.image4}
                                    alt="Fourth slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-md-6">
                        <div className="row m mt-3">
                            <h2>{this.state.products.title}</h2>
                        </div>
                        <div className="row m">
                            <h2>${this.state.products.price}</h2> &nbsp; &nbsp; <h4><del>$10</del></h4> &nbsp; &nbsp; <h2 className="text-success">50% off</h2>
                        </div>
                        <div className="row m">
                            <h3 class="text-warning"><span><i class="fa fa-star"></i></span><span><i class="fa fa-star"></i></span><span><i class="fa fa-star"></i></span><span><i class="fa fa-star"></i></span><span><i class="fa fa-star-o"></i></span></h3>
                        </div>
                        <hr />
                        <div className="row mt-2">
                            <Form className="m dd">
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Select Sizes</Form.Label>
                                    <Form.Control as="select">
                                        <option>XS</option>
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </div>
                        <div className="row mt-2 m">
                            <h5>Seller: &nbsp; <i>{this.state.products.seller}</i></h5>
                        </div>
                        <div className="row m mt-2">
                            <ul>
                                <li>
                                {this.state.products.desc1}
                                </li>
                                <li>
                                {this.state.products.desc2}
                                </li>
                                <li>
                                {this.state.products.desc3}
                                </li>
                                <li>
                                {this.state.products.desc3}
                                </li>
                                <li>
                                {this.state.products.desc4}
                                </li>
                            </ul>
                        </div>
                        <Button variant="secondary">Add to cart</Button> &nbsp; &nbsp;
                        <Button variant="primary">Buy Now</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;