import React from "react";

import "./gallery.css";
import Slide from "../../Shared/Slide/Slide";
import ThemeDividerHorizontal from "../../Shared/ThemeDividerHorizontal/ThemeDividerHorizontal";
import ImageCreekBw from "../../Assets/images/bw/creekbw.jpg";
import ImageLakeBw from "../../Assets/images/bw/lakebw.jpg";
import ImageForestBw from "../../Assets/images/bw/forestbw.jpg";

const Gallery = () => {
  return (
    <div className="container gallery__container">
      <div className="ThemeDividerHorizontalgallery">
        <ThemeDividerHorizontal themeName="gallery" />
      </div>
      <Slide slideImgLink={ImageCreekBw} />
      <Slide slideImgLink={ImageLakeBw} />
      <Slide slideImgLink={ImageForestBw} />
    </div>
  );
};

export default Gallery;
