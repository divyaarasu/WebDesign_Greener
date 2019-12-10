import React from 'react';
import './Info.css';
import carousel1 from '../../assets/images/carousel1.jpeg'
import{BrowserRouter as Router,Link} from 'react-router-dom';


function Info() {
    return (
      
      <div id="b">
      <div id="awarness"><h1><i>Awareness</i></h1></div>
      <div class="row">
  <div class="col-sm-5 col-md-6">
  <img
              className="d-block w-100"
              id="a"
              src={carousel1}
              alt="First slide"
            />
  
  
  </div>
  <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
  <h1><i><center>Wind Energy</center></i></h1>
  <p><q>Solar energy is the transformation of heat energy that comes from the sun to electricity. It has been used for thousands of years in many different ways by people all over the world. As well as its traditional human uses in heating, cooking, and drying, it is used today to make electricity where other power supplies are absent, such as in remote places and in space.</q></p>
  <button type="button" class="btn btn-primary">Read More</button>
  <Link to="/windInfo">Learn More</Link>
  </div>
</div>
<div><h1>                                                </h1></div>
<div class="row">
<div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
<div></div>
<h1><i>Wind Energy</i></h1>
<p><q>Solar energy is the transformation of heat energy that comes from the sun to electricity. It has been used for thousands of years in many different ways by people all over the world. As well as its traditional human uses in heating, cooking, and drying, it is used today to make electricity where other power supplies are absent, such as in remote places and in space.</q></p>


<button type="button" class="btn btn-primary" >Read More</button>


<div></div>
</div>
<div class="col-sm-5 col-md-6">
<img
            className="d-block w-100"
            id="a"
            src={carousel1}
            alt="First slide"
          />


</div>

</div>
<div class="row">
  <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
  <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
</div>
</div>




    )};

export default Info;