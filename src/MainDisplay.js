import React, { useState} from "react";
import "./App.css";
import "./MainDisplay.css";
import axios from "axios";


export default function MainDisplay()
 {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
  console.log(response.data);
  setTemperature(response.data.main.temp);
  setReady(true);
}

if (ready) {
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
        <strong id="temperature">{temperature}</strong>
        <span className="units">
          <button className="celsius1">°C |</button>
          <button className="fahrenheit-link">°F</button>
        </span>
      </div>
    </div>
  );
} else {
 const apiKey= "5f472b7acba333cd8a035ea85a0d4d4c";
  let city="London";
  let apiURL = `http://api.openweathermap.org/data/2.5/weather/?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiURL).then(handleResponse);

return "Loading...."

}
 
}
