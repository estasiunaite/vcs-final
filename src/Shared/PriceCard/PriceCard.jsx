import React from "react";
import "./PriceCard.css";
import BookNow from "./BookNow";

const PriceCard = ({ priceTag, roomType, roomDescription }) => (
  <div className="priceCard">
    <p className="priceTag">{priceTag}</p>
    <h2 className="roomType">{roomType}</h2>
    <p className="roomDescription">{roomDescription}</p>

    <div className="BookNow">
      <BookNow />
    </div>
  </div>
);

export default PriceCard;
