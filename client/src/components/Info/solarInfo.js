import React from 'react';
import './Info.css';
import wind1 from '../../assets/images/solar1.jpg'
import wind2 from '../../assets/images/solar3.jpg'
import{BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
function solarInfo() {
    return (
      <div id = "windbg">
        
      <h3 id="head1"><i>SOLAR ENERGY</i></h3>
        <div id="wind">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={wind1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={wind2} alt="Second slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>

</div>
</div>        

        <div id="head2">
        <p >
        There are three main ways to harness solar energy: photovoltaics, solar heating & cooling, and concentrating solar power. Photovoltaics generate electricity directly from sunlight via an electronic process and can be used to power anything from small electronics such as calculators and road signs up to homes and large commercial businesses. Solar heating & cooling (SHC) and concentrating solar power (CSP) applications both use the heat generated by the sun to provide space or water heating in the case of SHC systems, or to run traditional electricity-generating turbines in the case of CSP power plants.Solar energy is a very flexible energy technology: it can be built as distributed generation (located at or near the point of use) or as a central-station, utility-scale solar power plant (similar to traditional power plants). Both of these methods can also store the energy they produce for distribution after the sun sets, using cutting edge solar + storage technologies. Solar exists within a complex and interrelated electricity system in the U.S., working alongside other technologies like wind power to transition the U.S. to a clean energy economy.All of these applications depend on supportive policy frameworks at the local, state and federal level to ensure consumers and businesses have fair access to clean energy technologies like solar.here are more than 69 gigawatts (GW) of solar installed in the U.S., enough to power more than 13.1 million homes. Over the last decade, the solar market in the United States has grown at an average rate of 50% each year. There are more than 2 million individual solar installations in the U.S., ranging from small home rooftop systems to large utility-scale systems that add hundreds of megawatts of clean electricity to the power grid.
        </p>
        
        </div>
        
        
        </div>
        )};

        export default solarInfo;