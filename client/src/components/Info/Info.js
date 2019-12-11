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
  <div id="expl">
  <p><q>Wind power or wind energy is the use of wind to provide the mechanical power through wind turbines to turn electric generators and traditionally to do other work, like milling or pumping. Wind power is a sustainable and renewable energy, and has a much smaller impact on the environment compared to burning fossil fuels.</q></p>  
  </div>
  
  <div id='button'>
  <Link to="/windInfo">Learn More</Link>
  
  
  </div>
  
  </div>
</div>
<div><h1>                                                </h1></div>
<div class="row">
<div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
<div></div>
<h1><i>Solar Energy</i></h1>
<p><q>It is an important source of renewable energy and its technologies are broadly characterized as either passive solar or active solar depending on how they capture and distribute solar energy or convert it into solar power.</q></p>


<div id='button'>
  <Link to="/windInfo">Learn More</Link>
  
  
  </div>


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
<div id="expl">
<p><q>Wind power or wind energy is the use of wind to provide the mechanical power through wind turbines to turn electric generators and traditionally to do other work, like milling or pumping. Wind power is a sustainable and renewable energy, and has a much smaller impact on the environment compared to burning fossil fuels.</q></p>  
</div>

<div id='button'>
<Link to="/windInfo">Learn More</Link>


</div>

</div>
</div>
<div><h1>                                                </h1></div>
<div class="row">
<div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
<div></div>
<h1><i>Solar Energy</i></h1>
<p><q>It is an important source of renewable energy and its technologies are broadly characterized as either passive solar or active solar depending on how they capture and distribute solar energy or convert it into solar power.</q></p>


<div id='button'>
<Link to="/windInfo">Learn More</Link>


</div>


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
</div>




    )};

export default Info;