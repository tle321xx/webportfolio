import React from "react";
import "./Card.css";

function Card({ imageSrc, title, description }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageSrc} className="card-img-top" alt="Card Image" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h5>{title}</h5>
        </div>
        <div className="card-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
