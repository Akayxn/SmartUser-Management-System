import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="Card">
      <div className="CardItems-Grid">
        <div className="Details">
          <p>{props.title}</p>
          <h3>{props.value}</h3>
        </div>

        <div className="CardIcon">{props.icon}</div>
      </div>
    </div>
  );
}

export default Card;
