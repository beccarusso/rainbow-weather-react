import React from "react";
import CurrentTime from "./CurrentTime.js";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./App.css";
import "./MainDisplay.css";

export default function WeatherInfo(props){
return (
    <div className="WeatherInfo">
          <div className="city" id="city">
        {props.data.city}
        <br />
      </div>
      <ul>
        <li id="date"><FormattedDate/></li>
      
          <li id="time"><CurrentTime></CurrentTime></li>

        <li id="humidity">
        💧 Humidity: <span id="humidity-percent">{props.data.humidity}%</span>
        </li>
        <li id="wind">
         💨 Wind: <span id="wind-speed"></span>
          <span className="windUnits"></span>{Math.round(props.data.wind)} mp/h
        </li>
        <li id="icon">
          <WeatherIcon code={props.data.icon} />
        
        </li>
        <li id="description"><em>{props.data.description} </em>
        </li>
      </ul>
      <WeatherTemperature fahrenheit={props.data.temperature} />
     
    </div>
)
};