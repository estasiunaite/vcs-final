import React from "react";
import "./hero.css";
import HeroImg from "../../Assets/images/color/hero_img.jpg";
import CTA from "./CTA";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroImg">
        <img src={HeroImg} alt="hero_img" />{" "}
        <div className="cta">
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default Hero;
