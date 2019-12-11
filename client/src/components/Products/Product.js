import React from 'react';
import { Grid, Card, Carousel, Dropdown, Form, Media, Button } from 'react-bootstrap';
import './Products.css';
import img from '../../assets/images/cardLayoutportal.jpg'
import img1 from '../../assets/images/bambooCar1.jpg'
import img2 from '../../assets/images/bambooCar2.jpg'
import img3 from '../../assets/images/bambooCar3.jpg'



class Product extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img2}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-md-6">
                        <div className="row m mt-3">
                            <h2>Kitchen Compost Bin</h2>
                        </div>
                        <div className="row m">
                            <h2>$6</h2> &nbsp; &nbsp; <h4><del>$10</del></h4> &nbsp; &nbsp; <h2 className="text-success">40% off</h2>
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
                            <h5>Seller: &nbsp; <i>H.M Woodworks</i></h5>
                        </div>
                        <div className="row m mt-2">
                            <ul>
                                <li>
                                    Comes with:
                                    Bamboo Utensils | Bamboo Travel Cutlery Set | Reusable Utensils With Case | Camping Utensils To-Go | Bamboo Flatware Set | Travel Utensil Set | Eco Friendly Zero Waste Fork Spoon Knife Set Tiny Panda
                                </li>
                                <li>
                                    GUARANTEED QUALITY This STYLISH BLACK bamboo utensil set was created after extensive research. The case of the travel cutlery set is made from black canvas. The bamboo utensils, the toothbrush and its case are all made of 100% natural bamboo. These materials are specially chosen for their strong, sturdy, durable and eco friendly characters. If you are not 100% content with this product we offer you a FULL MONEY BACK GUARANTEE.
                                </li>
                                <li>
                                    HELPS PROTECT THE ENVIRONMENT Say no to plastic! Tiny Panda’s zero waste products are completely made out of durable, eco friendly and biodegradable materials. We choose to use bamboo especially because it is a sustainable solution to plastic pollution.. With these travel utensils with case you can reduce your plastic footprint. The change starts with the (wo)man in the mirror.
                                </li>
                                <li>
                                    GREAT AS A GIFT Inspire your friends and family to stop using disposable plastics. With this stylish gift you can help others contribute to a cleaner environment.
                                </li>
                                <li>
                                    BONUS This reusable utensil travel set includes a bamboo charcoal toothbrush with a very stylish and luxury bamboo case. This biodegradable toothbrush is perfect for use whilst camping, traveling, backpacking or for those who like to keep their teeth clean after a meal. For more specific information about this product please read the product description below. NOW WITH EXTRA BAMBOO TEASPOON!!
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