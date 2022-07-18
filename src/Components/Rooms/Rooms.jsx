import React from "react";
import "./rooms.css";
import PriceCard from "../../Shared/PriceCard/PriceCard";

const Rooms = () => {
  return (
    <div className="rooms">
      <div className="container container__rooms">
        <div ClassName="sectionDivider">
          <h1>rooms</h1>
          <div class="line-2">
            <hr></hr>
          </div>
        </div>
        <div className="roomPrices">
          <PriceCard
            priceTag="97€"
            roomType="FAMILY room"
            roomDescription="Family rooms can accommodate 4 guests. If you travel with children under 3 we offer a complimentary baby cot."
          />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
