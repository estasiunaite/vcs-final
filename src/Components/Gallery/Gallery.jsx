import React from "react";
import "./gallery.css";

import ThemeDividerHorizontal from "../../Shared/ThemeDividerHorizontal/ThemeDividerHorizontal";
import ImagegalleryPic1bw from "../../Assets/images/bw/galleryPic1bw.jpg";
import ImagegalleryPic2bw from "../../Assets/images/bw/galleryPic2bw.jpg";
import ImagegalleryPic3bw from "../../Assets/images/bw/galleryPic3bw.jpg";
import ImagegalleryPic4bw from "../../Assets/images/bw/galleryPic4bw.jpg";
import ImagegalleryPic5bw from "../../Assets/images/bw/galleryPic5bw.jpg";
import ImageSlider from "./ImageSlider";

const Gallery = () => {
  const slides = [
    { url: ImagegalleryPic1bw },
    { url: ImagegalleryPic2bw },
    { url: ImagegalleryPic3bw },
    { url: ImagegalleryPic4bw },
    { url: ImagegalleryPic5bw },
  ];
  return (
    <div className="galleryContainer">
      <h1 className="themeNameGallery">Gallery</h1>
      <div className="slidesContainer">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Gallery;
