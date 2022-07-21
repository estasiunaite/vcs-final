import React from "react";
import "./yoga.css";

import ThemeDividerVertical from "../../Shared/ThemeDividerVertical/ThemeDividerVertical";
import LearnMoreBtn from "../../Shared/LearnMoreBtnTranspWhite";
import yogaTeacher from "../../Assets/images/bw/yogaTeacher.jpg";
const Yoga = () => {
  return (
    <div id="toYoga" className="yogaSection">
      <div className="container yoga__container">
        <img className="yogaPic" src={yogaTeacher} alt="" />

        <div className="rectangleContainer">
          <div className="blueRectangle">
            <div className="whiteRectangle">
              <div className="aboutYogaParagraph">
                <h2>ALIGNMENT</h2>
                <p>
                  Teachers focuses on the correct sequencing of postures to
                  bring about and enhance specific benefits and effects. Regular
                  practice develops all round physical, mental & spiritual well
                  being. It is extremely beneficial for the prevention of injury
                  & ill health as well as improving existing conditions.
                </p>
                <div className="btn-transp-light learnMoreBtnYoga">
                  <LearnMoreBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="themeDividerVerticalyoga">
        <ThemeDividerVertical themeName="yoga" />
      </div>
    </div>
  );
};

export default Yoga;
