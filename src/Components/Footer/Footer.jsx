import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import "./footer.css";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <a href="https://www.linkedin.com/in/egle-stasiunaite-a860b8132/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/estasiunaite">
          {/* <BsLinkedin href="www.linkedin.com/in/egle-stasiunaite-a860b8132" /> */}
          <BsGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
