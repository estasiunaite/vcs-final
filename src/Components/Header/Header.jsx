import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";
// import Img1 from "./logo.png";
import Logo from "../../Assets/icons/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navigation">
          <Link to="/"> Home </Link>
          <Link to="/About"> About </Link>
          <Link to="/Food"> Food </Link>
          <Link to="/ContactUs"> Contact Us </Link>
          <Link to="/Login"> Login </Link>
          {/* <div className="menuIcon"></div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
