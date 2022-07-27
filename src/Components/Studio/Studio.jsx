import React from "react";
import { Link } from "react-router-dom";

import "./Studio.css";
import LearnMoreBtn from "../../Shared/LearnMoreBtn";
import sutdioPicbw from "../../Assets/images/bw/sutdioPicbw.jpg";
// import lobby from "../../Assets/images/color/lobby.jpg";

const Studio = () => {
  return (
    <div id="toStudio" className="studioContainer">
      <h1 className="themeDividerVerticalStudio">Studio</h1>
      <h1 className="themeDividerHorizontalStudio">Studio</h1>
      <div className="environmentRec"></div>
      <div className="studioPic">
        <img src={sutdioPicbw} alt="" />
      </div>
      <div className="aboutEnvironment1">
        <div className="aboutEnvironment">
          <h2> Cosy Environment</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            possimus quaerat omnis, optio quo repellat id maxime ipsa
            consectetur. Adipisci provident animi quas consectetur facere
            doloremque a vero, dignissimos soluta voluptatem.
          </p>
          <div className="learnMoreBtnStudio">
            <Link to="/StudioPage">
              <LearnMoreBtn />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
