import React from "react";
import { Link } from "react-router-dom";

import "./Studio.css";
import ThemeDividerVerticalLeft from "../../Shared/ThemeDividerVerticalLeft/ThemeDividerVerticalLeft";
import ThemeDividerHorizontal from "../../Shared/ThemeDividerHorizontal/ThemeDividerHorizontal";
import LearnMoreBtn from "../../Shared/LearnMoreBtn";
import sutdioPicbw from "../../Assets/images/bw/sutdioPicbw.jpg";
// import lobby from "../../Assets/images/color/lobby.jpg";

const Studio = () => {
  return (
    <div id="toStudio">
      <div className="themeDividerHorizontalStudio">
        <ThemeDividerHorizontal themeName="Studio" />
      </div>
      {/* <div className="container activities__container"> */}
      <div className="environmentRec">
        <div className="themeDividerVerticalStudio">
          <ThemeDividerVerticalLeft themeName="Studio" />
        </div>
      </div>
      <div className="lobbyPic">
        <img src={sutdioPicbw} alt="" />
      </div>
      <div className="aboutEnvironment ">
        <h2> Cosy Environment</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          possimus quaerat omnis, optio quo repellat id maxime ipsa consectetur.
          Adipisci provident animi quas consectetur facere doloremque a vero,
          dignissimos soluta voluptatem.
        </p>
        <div className="learnMoreBtnStudio">
          <Link to="/StudioPage">
            <LearnMoreBtn />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Studio;
