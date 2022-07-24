import React from "react";
import "./hero.css";
import HeroImg from "../../Assets/images/color/hero_img.jpg";
import CTA from "./CTA";

const Hero = () => {
  return (
    <div className="hero">
      <div className="HeroImg">
        <img src={HeroImg} alt="hero_img" />
        <div className="ctaBtn">
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default Hero;
