import React, { useState } from "react";
// import { Link } from "react-router-dom";
import styles from "./header.css";
import Logo from "../../Assets/icons/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);

  return (
    <header id="toHeader" className="navbar">
      <div className="container header__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>

        {/* <ul className={clicked ? [navMenu, active].join(" ") : [navMenu]}> */}
        <ul className={clicked ? "active" : "navMenu"}>
          <li>
            <a to="/"> Home</a>
          </li>
          <li>
            <a href="#toYoga"> Yoga</a>
          </li>
          <li>
            <a href="#toAbout"> About</a>
          </li>
          <li>
            <a href="#toFood"> Food</a>
          </li>
          <li>
            <Link to="/ContactUs"> Contact Us</Link>
          </li>
          <li>
            <Link to="/Login"> Login</Link>
          </li>
        </ul>
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
