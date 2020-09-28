import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar_wrapper">
      <div className="ul_navbar">
          <li><a href="/skincare">SKINCARE</a></li>
          <li><a href="/make-up"> MAKE UP</a></li>
          <li><a href="/body"> BODY</a></li>
          <li><a href="/hair"> HAIR</a></li>
          <li><a href="/fragrance"> FRAGRANCE</a></li>
          <li><a href="/nails"> NAILS</a></li>
          <li><a href="/tools"> TOOLS</a></li>
          <li><a href="/brands"> BRANDS</a></li>
      </div>
    </div>
  )
}

export default Navbar;
