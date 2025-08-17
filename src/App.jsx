import { useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import MainDash from "./Components/MainDash/MainDash";
import Sidebar from "./Components/Sidebar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="AppSection">
            <Sidebar /> 

          <Routes>

            <Route path="/dashboard" element={<MainDash></MainDash>}></Route>
            <Route path="/about"></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
