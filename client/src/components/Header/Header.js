import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <div className="header_wrapper">
      <div className="left_header">
        <ion-icon name="menu-outline" className="left__header--icon" style={{ padding: "0.4rem" ,width:"30px", height:"30px"}} ></ion-icon>
        <div className="img-logo"><img src={logo} style={{maxWidth:"180px", maxHeight:"40px", marginLeft:"60px"}} /></div>
      </div>

      <div className="center_header">
        <ion-icon name="search-outline" style={{ padding: "0.5rem"}} ></ion-icon>
        <input className="search-box" type="search" placeHolder=" Search products, articles, topics, brands, etc"></input>
      </div>

      <div className="right_header">
        <ion-icon name="person-outline" style={{ padding: "1.1rem", color:"white", marginRight:"-240px"}}></ion-icon>
        <button className="login" style={{height:"100%"}}>LOGIN / SIGNUP</button>
      </div>
    </div>
  )
}

export default Header;
