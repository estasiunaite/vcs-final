import React from "react";
import "./rooms.css";
import PriceCard from "../../Shared/PriceCard/PriceCard";
import ThemeDividerVertical from "../../Shared/ThemeDividerVertical/ThemeDividerVertical";
import ThemeDividerHorizontal from "../../Shared/ThemeDividerHorizontal/ThemeDividerHorizontal";
import room1bw from "../../Assets/images/bw/room1bw.jpg";
import room2bw from "../../Assets/images/bw/room2bw.jpg";
import room3bw from "../../Assets/images/bw/room3bw.jpg";
// import room1 from "../../Assets/images/color/room1.jpg";
// import room2 from "../../Assets/images/color/room2.jpg";
// import room3 from "../../Assets/images/color/room3.jpg";

const Rooms = () => {
  return (
    <div className="roomsSection">
      <div className="themeDividerVerticalRooms">
        <ThemeDividerVertical themeName="Rooms" />
      </div>
      <div className="ThemeDividerHorizontal">
        <ThemeDividerHorizontal themeName="Rooms" />
      </div>
      <div className="container container__rooms">
        <div className="displayedRoom">
          <div className="room1">
            <img className="room1bw" src={room1bw} alt="" />
            {/* <img className="room1" src={room1} alt="" /> */}
          </div>

          <div className="roomPrices">
            <PriceCard
              priceTag="97€"
              roomType="FAMILY room"
              roomDescription="Family rooms can accommodate 4 guests. If you travel with children under 3 we offer a complimentary baby cot."
            />
          </div>
        </div>

        <div className="doubleRoom">
          <div className="room2">
            <h3>Double room</h3>
            <img className="room2bw" src={room2bw} alt="" />

            {/* <img className="room2" src={room2} alt="" /> */}
          </div>
        </div>
        <div className="sharedRoom">
          <div className="room3">
            <h3>shared room</h3>
            <img className="room3bw" src={room3bw} alt="" />

            {/* <img className="room3" src={room3} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
