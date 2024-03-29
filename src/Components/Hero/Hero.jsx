import React from "react";
import { Link } from "react-router-dom";

import "./hero.css";
import CTA from "./CTA";
import HeroImg from "../../Assets/images/color/hero_img.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroImg">
        <img src={HeroImg} alt="hero_img" />{" "}
        <div className="cta">
          <Link to="/CheckSchedulePage">
            <CTA />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
