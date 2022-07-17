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
        <ul className="nav-menu">
          <li>
            <a to="/"> Home</a>
          </li>
          <li>
            <a to="/About"> About</a>
          </li>
          <li>
            <a to="/Food"> Food</a>
          </li>
          <li>
            <a to="/ContactUs"> Contact Us</a>
          </li>
          <li>
            <a to="/Login"> Login</a>
          </li>

          {/* <div className="menuIcon"></div> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
