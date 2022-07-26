import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { ScrollLink } from "react-scroll";
// const ScrollLink = Scroll.Link;
// import { Link, animateScroll as scroll } from "react-scroll";
// import {
//   Link,
//   Button,
//   Element,
//   Events,
//   animateScroll as scroll,
//   scrollSpy,
//   scroller,
// } from "react-scroll";

import "./header.css";
import Logo from "../../Assets/icons/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);

  return (
    <header id="toHeader" className="navbar">
      <div className="container header__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>
        <ul className={clicked ? "navMenu active" : "navMenu"}>
          <li>
            <Link
              to="/#toAbout"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/#toStudio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Studio
            </Link>
          </li>
          <li>
            <Link
              to="/#toYoga"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Teachers
            </Link>
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
