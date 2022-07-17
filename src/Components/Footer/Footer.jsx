import React from "react";
import FooterSocials from "./FooterSocials";
import "./footer.css";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <h2>footer</h2>
        <FooterSocials />
      </div>
    </footer>
  );
};

export default Footer;
