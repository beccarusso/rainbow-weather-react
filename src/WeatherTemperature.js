import React from "react";
import "./App.css";
import "./MainDisplay.css";

export default function WeatherTemperature(props){
    return (
 <div className="mainTemperature">
        
        <strong id="temperature">{Math.round(props.fahrenheit)}</strong>
        <span className="units">
          <button className="fahrenheit-link">°F |</button>
          <button className="celsius1">°C</button>
          
        </span>
      </div>
    )
};