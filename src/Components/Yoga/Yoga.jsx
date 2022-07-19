import React from "react";
import "./yoga.css";

import ThemeDividerVertical from "../../Shared/ThemeDividerVertical/ThemeDividerVertical";
import LearnMoreBtn from "../../Shared/LearnMoreBtn";
import yogaTeacher from "../../Assets/images/bw/yogaTeacher.jpg";
const Yoga = () => {
  return (
    <div className="yogaSection ">
      <div className="themeDividerVerticalyoga">
        <ThemeDividerVertical themeName="yoga" />
      </div>
      <div className="container yoga__container">
        <div className="yogaPic">
          <img src={yogaTeacher} alt="" />
        </div>
        <div className="aboutyoga">
          <h2>ALIGNMENT</h2>
          <p>
            Teachers focuses on the correct sequencing of postures to bring
            about and enhance specific benefits and effects. Regular practice
            develops all round physical, mental & spiritual well being. It is
            extremely beneficial for the prevention of injury & ill health as
            well as improving existing conditions.
          </p>
          <div className="learnMoreBtn">
            <div className="yogaRec2"></div>
            <div className="yogaRec1"></div>
            <LearnMoreBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yoga;
