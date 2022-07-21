import React from "react";
import "./activities.css";
import ThemeDividerVertical from "../../Shared/ThemeDividerVertical/ThemeDividerVertical";
import ThemeDividerHorizontal from "../../Shared/ThemeDividerHorizontal/ThemeDividerHorizontal";
import LearnMoreBtn from "../../Shared/LearnMoreBtn";
import lobbybw from "../../Assets/images/bw/lobbybw.jpg";
import lobby from "../../Assets/images/color/lobby.jpg";

const Activities = () => {
  return (
    <div className="activitiesSection ">
      <div className="themeDividerHorizontalActivities">
        <ThemeDividerHorizontal themeName="Activities" />
      </div>
      {/* <div className="container activities__container"> */}
      <div className="activitiesRec">
        <div className="themeDividerVerticalActivities">
          <ThemeDividerVertical themeName="Activities" />
        </div>
      </div>{" "}
      <div className="lobbyPic">
        <img src={lobbybw} alt="" />
      </div>
      {/* <div className="container activities__container"> */}
      <div className="aboutActivities">
        <h2>gathering place</h2>
        <p>
          This is a space for relaxing in a hammock or on the sofa, plugging
          into the internet with your personal laptop, sitting down to a game
          and eating dinner to the sunset. Enjoy pleasant breezes and incredible
          views of the lake, forest and evening sunsets.
        </p>
        <div className="learnMoreBtnActivities">
          <LearnMoreBtn />
        </div>
      </div>
      {/* </div> */}
    </div>
    // </div>
  );
};

export default Activities;
