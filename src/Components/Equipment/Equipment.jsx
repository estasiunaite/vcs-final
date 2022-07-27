import React from "react";
import { Link } from "react-router-dom";

import "./Equipment.css";
import LearnMoreBtn from "../../Shared/LearnMoreBtn";
import props2bw from "../../Assets/images/bw/props2bw.jpg";

const Equipment = () => {
  return (
    <div id="toProps" className="propsContainer">
      <div className="propsPic">
        <img src={props2bw} alt="" />
      </div>

      <div className="aboutProps">
        <h2>using props</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero iste
          nulla ullam optio accusantium est quae quod facilis quisquam, officia
          sequi dolorum illum perspiciatis, esse, quaerat non provident
          consectetur laudantium magni recusandae.
        </p>
        <div className="learnMoreBtnProps">
          <Link to="/EquipmentPage">
            <LearnMoreBtn />
          </Link>
        </div>
      </div>
      <h1 className="themeDividerVerticalProps">Equipment</h1>
    </div>
  );
};

export default Equipment;
