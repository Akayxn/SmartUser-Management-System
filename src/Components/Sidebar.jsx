import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    <div className="Sidebar">
      <h1 className="logo">DataHive</h1>
      <ul className="Sidebar-items">
        {SidebarData.map((val, key) => {
          return (
            <li key={key} onClick={()=>{window.location.pathname = val.link}}>
              <div>{val.icon}</div>
              <div>{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
