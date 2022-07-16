import React from "react";
import "./card.css";

const Card = ({ imgLink, title, paragraph }) => (
  <div className="card">
    <img className="cardImg" src={imgLink} />
    <div className="title">{title}</div>
    <div className="paragraph">{paragraph}</div>
  </div>
);

export default Card;
