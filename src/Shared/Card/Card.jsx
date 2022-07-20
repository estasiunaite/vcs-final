import React from "react";
import "./card.css";

const Card = ({ cardImgLink, title, paragraph, reDirection }) => (
  <div className="card">
    <a>
      {/* <div id="redirectTo" href={reDirection}> */}
      <img className="cardImg" src={cardImgLink} />
      {/* </div> */}
    </a>
    <h3 className="title">{title}</h3>
    <div className="line-1">
      <hr></hr>
    </div>
    <p className="paragraph">{paragraph}</p>
  </div>
);

export default Card;
