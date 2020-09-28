import React from 'react';
import Apple from '../../assets/apple_store.png';
import Google from '../../assets/google_store.png';
import Logo from '../../assets/logo.svg';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer_wrapper container">
      <div className="left_footer">
        <div className="left_footer_top">
          <div className="ul_footer">
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/feedback">Feedback</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/terms-conditions">Terms & Conditions</a></li>
              <li><a href="/privacy-policy">Privacy Pollicy</a></li>
              <li><a href="/help">Help</a></li>
              <li><a href="/awards">Awards</a></li>
              <li><a href="/newsletter">Newsletter</a></li>
          </div>
        </div>

        <div className="left_footer_bottom">
          <img src={Logo} alt={"..."} style={{height:"20px", width:"100px", paddingRight:"20px", paddingTop:"10px"}}/>
          <h1 style={{fontSize:"12px", fontWeight:"50"}}> Copyright © 2015 - 2017 Female Daily Network - All rights reserved</h1>
        </div>
      </div>

      <div className="right_footer">
        <div className="right_footer_top">
          <h1 style={{fontSize:"12px"}}>Download Our Mobile App</h1>
          <img src={Apple} alt={"..."} style={{height:"37px", width:"100px", paddingRight:"20px", paddingTop:"10px"}}/>
          <img src={Google} alt={"..."} style={{height:"37px", width:"100px", paddingRight:"20px", paddingTop:"10px"}}/>
        </div>

        <div className="right_footer_icons">
          <ion-icon name="logo-facebook" style={{width:"25px", height:"25px", paddingRight:"10px"}}></ion-icon>
          <ion-icon name="logo-twitter" style={{width:"25px", height:"25px", paddingRight:"10px"}}></ion-icon>
          <ion-icon name="logo-instagram" style={{width:"25px", height:"25px", paddingRight:"10px"}}></ion-icon>
          <ion-icon name="logo-youtube" style={{width:"25px", height:"25px", paddingRight:"10px"}}></ion-icon>
        </div>
      </div>
    </div>
  )
}

export default Footer;
