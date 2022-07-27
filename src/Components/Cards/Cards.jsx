import React from "react";

import "./cards.css";
import Card from "../../Shared/Card/Card";
import IconYoga from "../../Assets/icons/yoga.svg";
import IconVegan from "../../Assets/icons/vegan.svg";
import yogaMat from "../../Assets/icons/yogaMat.svg";

const Cards = () => {
  return (
    <div id="toAbout" className="cardsSection">
      <div className="container cards__container">
        <Card
          cardImgLink={IconYoga}
          title="certified teachers"
          paragraph="Laborum, placeat neque earum eum possimus facere cupiditate voluptates. Veniam, odit!"
        />

        <Card
          cardImgLink={IconVegan}
          title="healthy snacks"
          paragraph="Nemo itaque quam deleniti doloribus sint mollitia adipisicing quas, facilis aperiam aliquam hic."
        />

        <Card
          cardImgLink={yogaMat}
          title="yoga props"
          paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, ipsam deserunt vero?"
        />
      </div>
    </div>
  );
};

export default Cards;
