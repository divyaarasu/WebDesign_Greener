import React from 'react';
import './Info.css';
import wind from '../../assets/images/wind.jpg'
import solar from '../../assets/images/solar.jpg'
import biogas from '../../assets/images/biogas.jpg'
import recycle from '../../assets/images/reuse.jpg'
import{BrowserRouter as Router,Link} from 'react-router-dom';


function Info() {
    return (
      <div id="bg">
      <div id="b">
      
      <div id="awarness"><h1><i>Awareness</i></h1></div>
      <div class="row">
  <div class="col-sm-5 col-md-6">
  <img
              className="d-block w-100"
              id="a"
              src={wind}
              alt="First slide"
            />
  
  
  </div>
  <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
  
 <div id="head"> <h1 ><i>Wind Energy</i></h1></div>
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
<div id="expl">
<p><q>It is an important source of renewable energy and its technologies are broadly characterized as either passive solar or active solar depending on how they capture and distribute solar energy or convert it into solar power.Solar energy is radiant light and heat from the Sun that is harnessed using a range of ever-evolving.Solar energy is the cleanest and most abundant renewable energy</q></p>
</div>

<div id='button'>
  <Link to="/solarInfo">Learn More</Link>
  
  
  </div>


<div></div>
</div>
<div class="col-sm-5 col-md-6">
<img
            className="d-block w-100"
            id="a"
            src={solar}
            alt="First slide"
          />


</div>

</div>
<div><h1>                                                </h1></div>
<div class="row">
<div class="col-sm-5 col-md-6">
<img
            className="d-block w-100"
            id="a"
            src={biogas}
            alt="First slide"
          />


</div>
<div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">

<div id="head"> <h1 ><i>Biogas</i></h1></div>
<div id="expl">
<p><q>Biogas is a type of biofuel that is naturally produced from the decomposition of organic waste. When organic matter, such as food scraps and animal waste, break down in an anaerobic environment (an environment absent of oxygen) they release a blend of gases, primarily methane and carbon dioxide. Biogas is produced from biomass.</q></p>  
</div>

<div id='button'>
<Link to="/biogasInfo">Learn More</Link>


</div>

</div>
</div>
<div><h1>                                                </h1></div>
<div class="row">
<div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
<div></div>
<h1><i>Reuse</i></h1>
<div id="expl">
<p><q>Reusing is the process of converting waste materials into new materials and objects. It is an alternative to "conventional" waste disposal that can save material and help lower greenhouse gas emissions. Reusing can prevent the waste of potentially useful materials and reduce the consumption of fresh raw materials, thereby reducing: energy usage.</q></p>
</div>

<div id='button'>
<Link to="/reuseInfo">Learn More</Link>


</div>


<div></div>
</div>
<div class="col-sm-5 col-md-6">
<img
          className="d-block w-100"
          id="a"
          src={recycle}
          alt="First slide"
        />


</div>

</div>
<div><h1>                                                </h1></div>
</div>


</div>

    )};

export default Info;