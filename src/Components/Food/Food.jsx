import React from "react";
import "./food.css";
import ThemeDividerVertical from "../../Shared/ThemeDividerVertical/ThemeDividerVertical";
import LearnMoreBtn from "../../Shared/LearnMoreBtn";
import foodbw from "../../Assets/images/bw/foodbw.jpg";
import food from "../../Assets/images/color/food.jpg";

const Food = () => {
  return (
    <div className="foodSection ">
      <div className="container food__container">
        <div className="foodPic">
          <img src={foodbw} alt="" />

          <div className="gradientRec"></div>
        </div>
        <div className="aboutFood">
          <h2>Food for Life</h2>
          <p>
            Relax without the inconvenience of meal preparation - our chef
            prepares fantastic meals that are absolutely delicious, nutritious
            and balanced. But you can also use a beautiful kitchen that we stock
            with local, seasonal and organic fruits and vegetables and all the
            kitchen tools you need.
          </p>
          <div className="learnMoreBtn">
            <LearnMoreBtn />
          </div>
        </div>
      </div>
      <div className="themeDividerVerticalFood">
        <ThemeDividerVertical themeName="Food" />
      </div>
    </div>
  );
};

export default Food;
