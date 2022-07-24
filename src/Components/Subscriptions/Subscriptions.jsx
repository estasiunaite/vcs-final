import React from "react";
import "./Subscriptions.css";
import PriceCard from "../../Shared/PriceCard/PriceCard";
import ThemeDividerVertical from "../../Shared/ThemeDividerVertical/ThemeDividerVertical";
import ThemeDividerHorizontal from "../../Shared/ThemeDividerHorizontal/ThemeDividerHorizontal";
import oneTimebw from "../../Assets/images/bw/oneTimebw.jpg";
import monthbw from "../../Assets/images/bw/monthbw.jpg";
import yearbw from "../../Assets/images/bw/yearbw.jpg";
// import room1 from "../../Assets/images/color/room1.jpg";
// import room2 from "../../Assets/images/color/room2.jpg";
// import room3 from "../../Assets/images/color/room3.jpg";

const Subscriptions = () => {
  return (
    <div id="toSubscriptions" className="subscriptionSection">
      <div className="themeDividerHorizontalSubscriptions">
        <ThemeDividerHorizontal themeName="Membership" />
      </div>
      <div className="container container__subscriptions">
        <div className="displayedSubscription">
          <div className="subscription1">
            <img className="oneTimebw" src={oneTimebw} alt="" />
          </div>
          <div className="subscriptionPrices">
            <PriceCard
              priceTag="9.99€"
              roomType="one lesson"
              roomDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis delectus non debitis quis soluta obcaecati veniam! "
            />
          </div>
        </div>
        <div className="subscription2">
          <div className="month">
            <h2>one month</h2>
            <img className="monthbw" src={monthbw} alt="" />
          </div>
        </div>
        <div className="subscription3">
          <div className="year">
            <h2>One year</h2>
            <img className="yearbw" src={yearbw} alt="" />
          </div>
        </div>
      </div>
      <div className="themeDividerVerticalSubscriptions">
        <ThemeDividerVertical themeName="Membership" />
      </div>
    </div>
  );
};

export default Subscriptions;
