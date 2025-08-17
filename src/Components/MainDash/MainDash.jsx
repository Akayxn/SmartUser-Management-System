import React from "react";
import "./MainDash.css";
import Cards from "../Cards/Cards";
import Activity from "../Activity/Activity";

function MainDash() {
  return(
    <div className="MainDash">
        <h1>Dashboard</h1>
         <div className="MainDash-Items">
  <Cards/>
        <Activity/>


         </div>
       

    </div>
  ) 
}

export default MainDash;
