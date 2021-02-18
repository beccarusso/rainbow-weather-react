import React from "react";
import "./App.css";

export default function MainDisplay() {
  return (
    <div className="mainDisplay">
      <div className="city" id="city">
        Jamestown
        <br />
      </div>
      <ul>
        <li id="date"></li>

        <li>
          Humidity: <span id="humidity"></span>80%
        </li>
        <li>
          Wind: <span id="wind"></span>
          <span className="windUnits"></span>5 km/h
        </li>
        <li id="description">
          <div className="icon"></div>
        </li>
      </ul>
      <div className="mainTemperature">
        <strong id="temperature">80 </strong>
        <span className="units">
          <button className="celsius1">°C |</button>
          <button className="fahrenheit-link">°F</button>
        </span>
      </div>
    </div>
  );
}
