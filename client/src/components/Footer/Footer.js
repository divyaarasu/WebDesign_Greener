import React from 'react';
import './Footer.css';

function Footer() {
    return(
        <footer class="footer">
    
    <ul class="footerleft" >
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
              <div class="text-center center-block " >
                <a href=""><i id="social-fb" class="fa fa-facebook-square fa-2x social space"></i></a>
                <a href=""><i id="social-tw" class="fa fa-twitter-square fa-2x social space"></i></a>
                <a href=""><i id="social-gp" class="fa fa-instagram fa-2x social space"></i></a>
                <a href=""><i id="social-em" class="fa fa-envelope-square fa-2x social space"></i></a>
            </div>      
    
</footer>
    );
}
export default Footer;