import React from "react";
import "./gallery.css";

import ThemeDividerHorizontal from "../../Shared/ThemeDividerHorizontal/ThemeDividerHorizontal";
import ImageCreekBw from "../../Assets/images/bw/creekbw.jpg";
import ImageLakeBw from "../../Assets/images/bw/lakebw.jpg";
import ImageForestBw from "../../Assets/images/bw/forestbw.jpg";
import ImageSlider from "./ImageSlider";

const Gallery = () => {
  const slides = [
    { url: ImageCreekBw },
    { url: ImageLakeBw },
    { url: ImageForestBw },
  ];
  return (
    <div className="galleryContainer">
      <div className="themeDividerHorizontalgallery">
        <ThemeDividerHorizontal themeName="gallery" />
      </div>
      <div className="container slidesContainer">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Gallery;
