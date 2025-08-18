import "./App.css";

import { useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import MainDash from "./Components/MainDash/MainDash";
import Sidebar from "./Components/Sidebar";
import UserList from "./Components/UserList/UserList";
import AddUser from "./Components/AddUser/AddUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="AppSection">
          <Sidebar /> 

          <Routes>

            <Route path="dashboard" element={<MainDash></MainDash>}></Route>
            <Route path="userlist" element={<UserList></UserList>}></Route>
            <Route path="adduser" element={<AddUser></AddUser>}></Route>


            <Route path="about"></Route>
            <Route path="/" element={<MainDash></MainDash>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
