import React from "react";
import { Link } from "react-router-dom";

import "./yoga.css";

import ThemeDividerVertical from "../../Shared/ThemeDividerVertical/ThemeDividerVertical";
import LearnMoreBtnWhite from "../../Shared/LearnMoreBtnWhite";
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
                <h2>our teachers</h2>
                <p>
                  Teachers focuses on the correct sequencing of postures to
                  bring about and enhance specific benefits and effects. Regular
                  practice develops all round physical, mental & spiritual well
                  being. It is extremely beneficial for the prevention of injury
                  & ill health as well as improving existing conditions.
                </p>
                <div className="learnMoreBtnYoga">
                  <Link to="/YogaPage">
                    <LearnMoreBtnWhite />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="themeDividerVerticalyoga">
        <ThemeDividerVertical themeName="teachers" />
      </div>
    </div>
  );
};

export default Yoga;
