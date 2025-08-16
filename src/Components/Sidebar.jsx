import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  const [Selected, setSelected] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="Sidebar">
      <h1 className="logo">DataHive</h1>
      <ul className="Sidebar-items">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              onClick={() => {
                setSelected(key);
                navigate(val.link)
              }}
              className={Selected === key ? "active" : ""}
            >
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
