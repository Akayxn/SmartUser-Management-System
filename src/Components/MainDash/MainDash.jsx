import React from "react";
import "./MainDash.css";
import Cards from "../Cards/Cards";
import Activities from "../Activities/Activities";

function MainDash() {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <div className="MainDash-Items">
        <Cards />
        <Activities />
      </div>
    </div>
  );
}

export default MainDash;
