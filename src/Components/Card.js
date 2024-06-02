import React from "react";

function Card({ image, title }) {
  return (
    <div className="card">
      <img src={image} alt="" />
      <h4>{title}</h4>
    </div>
  );
}

export default Card;
