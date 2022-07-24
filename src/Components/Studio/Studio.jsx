import React from "react";
import { Link } from "react-router-dom";

import "./Studio.css";
import ThemeDividerVertical from "../../Shared/ThemeDividerVertical/ThemeDividerVertical";
import ThemeDividerHorizontal from "../../Shared/ThemeDividerHorizontal/ThemeDividerHorizontal";
import LearnMoreBtn from "../../Shared/LearnMoreBtn";
import lobbybw from "../../Assets/images/bw/lobbybw.jpg";
import lobby from "../../Assets/images/color/lobby.jpg";

const Studio = () => {
  return (
    <div id="toStudio" className="environmentSection ">
      <div className="themeDividerHorizontalEnvironment">
        <ThemeDividerHorizontal themeName="Studio" />
      </div>
      {/* <div className="container activities__container"> */}
      <div className="environmentRec">
        <div className="themeDividerVerticalEnvironment">
          <ThemeDividerVertical themeName="Studio" />
        </div>
      </div>
      <div className="lobbyPic">
        <img src={lobbybw} alt="" />
      </div>
      {/* <div className="container activities__container"> */}
      <div className="aboutEnvironment ">
        <h2> Cosy Environment</h2>
        <p>
          This is a space for relaxing in a hammock or on the sofa, plugging
          into the internet with your personal laptop, sitting down to a game
          and eating dinner to the sunset. Enjoy pleasant breezes and incredible
          views of the lake, forest and evening sunsets.
        </p>
        <div className="learnMoreBtnEnvironment">
          <Link to="/StudioPage">
            <LearnMoreBtn />
          </Link>
        </div>
      </div>
      {/* </div> */}
    </div>
    // </div>
  );
};

export default Studio;
