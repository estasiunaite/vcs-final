import React from "react";
import "./hero.css";
import HeroImg from "../../Assets/images/color/hero_img.jpg";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="HeroImg"></div>
        <img src={HeroImg} alt="hero_img" />
      </div>
    </div>
  );
};

export default Hero;
