import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import MainDisplay from "./MainDisplay";
import Forecast from "./Forecast";
import Footer from "./Footer";
import axios from "axios";



function App() {
// 🌈 Enjoy this colorful app! The background color changes based on your current time :)
  function getClassDay() {
    var currentTime = new Date().getHours();
    if (0 <= currentTime && currentTime < 4) {
      return "night";
    }
    if (4 <= currentTime && currentTime < 9) {
      return "morning";
    }
    if (9 <= currentTime && currentTime < 15) {
      return "day";
    }
    if (15 <= currentTime && currentTime < 21) {
      return "evening";
    }
    if (21 <= currentTime && currentTime <= 24) {
      return "night";
    }
  }
  return (
    <div className="App">
      <div className="container">
        <div className={`card ${getClassDay()}`} style={{ width: "25rem" }}>
          <script
            src="https://kit.fontawesome.com/cf78426d14.js"
            crossOrigin="anonymous"
          ></script>
          <MainDisplay defaultCity="New York" />
          <Forecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default App;