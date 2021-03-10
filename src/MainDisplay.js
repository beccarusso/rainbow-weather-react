import React from "react";
import "./App.css";
import "./MainDisplay.css";


export default function MainDisplay() {
  return (
    <div className="mainDisplay">
      <div className="city" id="city">
        Jamestown
        <br />
      </div>
      <ul>
        <li id="date">Wednesday, March 10</li>
      
          <li id="time">10:00</li>

        <li id="humidity">
          Humidity: <span id="humidity-percent">80%</span>
        </li>
        <li id="wind">
          Wind: <span id="wind-speed"></span>
          <span className="windUnits"></span>5 km/h
        </li>
        <li id="description"><em> Mostly cloudy </em>
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
