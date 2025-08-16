import { useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="AppSection">
        <Sidebar />

          <Routes>
            <Route path="/dashboard"></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
