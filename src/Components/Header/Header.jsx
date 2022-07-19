import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../../Assets/icons/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);

  return (
    <header className="navbar">
      <div className="container header__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>

        {/* <ul className="nav-menu"> */}
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {/* <li>
            <a to="/"> Home</a>
          </li> */}
          <li>
            <a href="#toYoga"> Yoga</a>
          </li>
          <li>
            <a to="toAbout"> About</a>
          </li>
          <li>
            <a to="toFood"> Food</a>
          </li>
          <li>
            <a to="/ContactUs"> Contact Us</a>
          </li>
          <li>
            <a to="/Login"> Login</a>
          </li>
        </ul>
        {/* <div className="hamburger"> */}
        <div className="hamburger" onClick={handleClick}>
          {clicked ? (
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
