import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../../Assets/icons/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <header className="navbar">
      <div className="container header__container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        {/* <ul className="nav-menu"> */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
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
          </li>{" "}
        </ul>
        {/* <div className="hamburger"> */}
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <AiOutlineClose className="icon" />
          ) : (
            <GiHamburgerMenu className="icon" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
