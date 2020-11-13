import React, { Component } from 'react';
import "./footer.css";

import { Link } from 'react-router-dom';

class Footer extends Component {
    state = {  }
    render() { 
        return (
        <React.Fragment>
            <div className="foot-title">
            
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>Our Drive</h6>
            <p class="text-justify"> <i>Organic</i> is a local supplier and chain of fresh local farms and fisheries. Our goal is to provide the best grown, best kept, and ofcourse,  the most fresh groceries on the market.  We highly value our customers and place their health as our business priority.</p>
          </div>

          

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><Link to="/about">About Us</Link></li>
              
              <li><Link to="/catalog">Catalog</Link></li>

              <li><Link to="/todo">Todo</Link></li>
              
            </ul>
          </div>
        </div>
        
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#"> Organic</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
            </div>
          
        </React.Fragment>
        );
    }
}
 
export default Footer;