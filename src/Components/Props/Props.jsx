import React from "react";
import "./props.css";
import ThemeDividerVertical from "../../Shared/ThemeDividerVertical/ThemeDividerVertical";
import LearnMoreBtn from "../../Shared/LearnMoreBtn";
import props2bw from "../../Assets/images/bw/props2bw.jpg";

const Props = () => {
  return (
    <div id="toProps" className="propsSection ">
      <div className="container props__container">
        <div className="propsPic">
          <img src={props2bw} alt="" />
          <div className="gradientRec">
            <div noRectangle></div>
          </div>
        </div>

        <div className="aboutProps">
          <h2>full equipment</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            iste nulla ullam optio accusantium est quae quod facilis quisquam,
            officia sequi dolorum illum perspiciatis, esse, quaerat non
            provident consectetur laudantium magni recusandae. Corrupti magnam
            accusantium ad, laboriosam deserunt quia unde, natus a aspernatur
            ipsam fuga dignissimos amet aliquam quod perspiciatis numquam
            eligendi est accusamus reiciendis incidunt ratione exercitationem.
          </p>
          <div className="learnMoreBtn">
            <LearnMoreBtn />
          </div>
        </div>
      </div>

      <div className="themeDividerVerticalProps">
        <ThemeDividerVertical themeName="Eqiuipment" />
      </div>
    </div>
  );
};

export default Props;
