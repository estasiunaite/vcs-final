import React from "react";
import Card from "../../Shared/Card/Card";
import "./cards.css";
import IconYoga from "../../Assets/icons/yoga.svg";
import IconVegan from "../../Assets/icons/vegan.svg";
import yogaMat from "../../Assets/icons/yogaMat.svg";

const Cards = () => {
  return (
    <div id="toAbout" className="cardsSection">
      <div className="container cards__container">
        <Card
          // reDirection={toYoga}
          cardImgLink={IconYoga}
          title="certified teachers"
          paragraph="Laborum, placeat neque earum eum possimus facere cupiditate voluptates. Veniam, odit!"
        />

        <Card
          // reDirection={toFood}
          cardImgLink={IconVegan}
          title="healthy snacks"
          paragraph="Nemo itaque quam deleniti doloribus sint mollitia adipisicing quas, facilis aperiam aliquam hic."
        />

        <Card
          // reDirection={toSubscriptions}
          cardImgLink={yogaMat}
          title="yoga props"
          paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, ipsam deserunt vero?"
        />
      </div>
    </div>
  );
};

export default Cards;
