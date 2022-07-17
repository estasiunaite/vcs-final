import React from "react";
import "./gallery.css";
import Slide from "../../Shared/Slide/Slide";
import ImageCreekBw from "../../Assets/images/bw/creekbw.jpg";
import ImageLakeBw from "../../Assets/images/bw/lakebw.jpg";
import ImageForestBw from "../../Assets/images/bw/forestbw.jpg";

// import Img1 from "./creekbw.jpg";

const Gallery = () => {
  return (
    <div className="container gallery__container">
      <Slide slideImgLink={ImageCreekBw} />
      <Slide slideImgLink={ImageLakeBw} />
      <Slide slideImgLink={ImageForestBw} />
    </div>
  );
};

export default Gallery;

// "../../src/Assets/images/bw/creekbw.jpg";
