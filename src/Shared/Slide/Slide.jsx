import React from "react";

const Slide = ({ slideImgLink }) => {
  return (
    <div className="Slide">
      <img className="slideImg" src={slideImgLink} />
    </div>
  );
};

export default Slide;
