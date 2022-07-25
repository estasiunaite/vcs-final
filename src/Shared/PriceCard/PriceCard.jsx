import React from "react";
import "./PriceCard.css";
import BookNow from "./BookNow";

const PriceCard = ({ priceTag, subscriptionType, subscriptionDescription }) => (
  <div className="priceCard">
    <p className="priceTag">{priceTag}</p>
    <h2 className="subscriptionType">{subscriptionType}</h2>
    <p className="subscriptionDescription">{subscriptionDescription}</p>

    <div className="bookNow">
      <BookNow />
    </div>
  </div>
);

export default PriceCard;
