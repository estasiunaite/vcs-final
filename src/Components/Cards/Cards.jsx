import React from "react";
import Card from "../../Shared/Card/Card";
import "./cards.css";
import IconYoga from "../../Assets/icons/yoga.svg";
import IconVegan from "../../Assets/icons/vegan.svg";
import IconForest from "../../Assets/icons/forest.svg";

const Cards = () => {
  return (
    <div id="toAbout" className="cardsSection">
      <div className="container cards__container">
        <Card
          // reDirection={toYoga}
          cardImgLink={IconYoga}
          title="certified teachers"
          paragraph="You can be sure that your teacher has received thousands of hours of training."
        />

        <Card
          // reDirection={toFood}
          cardImgLink={IconVegan}
          title="healthy food"
          paragraph="We believe that nutritious, wholesome food is essential for a happy life."
        />

        <Card
          // reDirection={toRooms}
          cardImgLink={IconForest}
          title="coMFortable rooms"
          paragraph="Excellent in-room amenities and facilities will create the most relaxing feel."
        />
      </div>
    </div>
  );
};

export default Cards;
