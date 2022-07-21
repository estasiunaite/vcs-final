import React from "react";

import "./gallery.css";

// import { FcNext } from "react-icons/fc";
import Slide from "../../Shared/Slide/Slide";

import ThemeDividerHorizontal from "../../Shared/ThemeDividerHorizontal/ThemeDividerHorizontal";
import ImageCreekBw from "../../Assets/images/bw/creekbw.jpg";
import ImageLakeBw from "../../Assets/images/bw/lakebw.jpg";
import ImageForestBw from "../../Assets/images/bw/forestbw.jpg";

const Gallery = () => {
  return (
    <div className="galleryContainer">
      <div className="themeDividerHorizontalgallery">
        <ThemeDividerHorizontal themeName="gallery" />
      </div>
      <div className="sliderContainer"></div>
    </div>
  );
};

export default Gallery;

{
  /* <Swiper>
          <SwiperSlide>
            <Slide slideImgLink={ImageCreekBw} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide slideImgLink={ImageLakeBw} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide slideImgLink={ImageForestBw} />
          </SwiperSlide>
        </Swiper> */
}
