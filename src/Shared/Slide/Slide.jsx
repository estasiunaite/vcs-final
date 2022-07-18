import React from "react";

const Slide = ({ slideImgLink }) => {
  return (
    <div className="slide">
      <img className="slideImg" src={slideImgLink} />
    </div>
  );
};

export default Slide;
