import React from "react";
import "./card.css";

const Card = ({ imgLink, title, paragraph }) => (
  <div className="card">
    <img className="cardImg" src={imgLink} />
    <h2 className="title">{title}</h2>
    <p className="paragraph">{paragraph}</p>
  </div>
);

export default Card;
