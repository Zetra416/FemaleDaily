import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar_wrapper">
      <div className="ul_navbar">
          <li><a href="#">SKINCARE</a></li>
          <li><a href="#"> MAKE UP</a></li>
          <li><a href="#"> BODY</a></li>
          <li><a href="#"> HAIR</a></li>
          <li><a href="#"> FRAGRANCE</a></li>
          <li><a href="#"> NAILS</a></li>
          <li><a href="#"> TOOLS</a></li>
          <li><a href="#"> BRANDS</a></li>
      </div>
    </div>
  )
}

export default Navbar;
