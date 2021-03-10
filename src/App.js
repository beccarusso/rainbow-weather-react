import logo from "./logo.svg";
import "./App.css";
import React from "react";
import SearchArea from "./SearchArea";
import MainDisplay from "./MainDisplay";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  function getClassDay() {
    var currentTime = new Date().getHours();
    if (0 <= currentTime && currentTime < 5) {
      return "morning";
    }
    if (5 <= currentTime && currentTime < 11) {
      return "morning";
    }
    if (11 <= currentTime && currentTime < 16) {
      return "day";
    }
    if (16 <= currentTime && currentTime < 22) {
      return "evening";
    }
    if (22 <= currentTime && currentTime <= 24) {
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
          <SearchArea />
          <MainDisplay />
          <Forecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default App;