import React from 'react';
import './Footer.css';

function Footer() {
    return(
        <footer className="footer">
    
    <ul className="footerleft" >
                    <li>
                        <a href="" id="coolbutton" aria-hidden="true">FAQ </a>                   
                    </li>
                    <li>
                        <content>•</content>    
                                       
                    </li>
                    <li>
                        <a href=""id="coolbutton" aria-hidden="true">About Us </a>     
                                       
                    </li>
                    <li>
                        <content>•</content>    
                                       
                    </li>
                    <li>
                      <a href=""id="coolbutton" aria-hidden="true">Terms & Conditions </a>                    
                  </li>
                  <li>
                      <content>•</content>    
                                     
                  </li>
                    <li>
                        <a href=""id="coolbutton" aria-hidden="true">Contact Us </a>
                    </li>
                </ul>
              <div className="text-center center-block " >
                <a href=""><i id="social-fb" className="fa fa-facebook-square fa-2x social space"></i></a>
                <a href="https://twitter.com/Greener18660194"><i id="social-tw" className="fa fa-twitter-square fa-2x social space"></i></a>
                <a href=""><i id="social-gp" className="fa fa-instagram fa-2x social space"></i></a>
                <a href=""><i id="social-em" className="fa fa-envelope-square fa-2x social space"></i></a>
            </div>      
    
</footer>
    );
}
export default Footer;