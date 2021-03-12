import React, { useState} from "react";
import "./App.css";
import "./MainDisplay.css";
import axios from "axios";
import CurrentTime from "./CurrentTime.js";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon";


export default function MainDisplay(props)
 {

  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
  


if (weatherData.ready) {
 return (
    <div className="mainDisplay">
      <div className="city" id="city">
        {weatherData.city}
        <br />
      </div>
      <ul>
        <li id="date"><FormattedDate/></li>
      
          <li id="time"><CurrentTime></CurrentTime></li>

        <li id="humidity">
        💧 Humidity: <span id="humidity-percent">{weatherData.humidity}%</span>
        </li>
        <li id="wind">
         💨 Wind: <span id="wind-speed"></span>
          <span className="windUnits"></span>{Math.round(weatherData.wind)} mp/h
        </li>
        <li id="icon">
          <WeatherIcon code={weatherData.icon} />
        
        </li>
        <li id="description"><em>{weatherData.description} </em>
        </li>
      </ul>
      <div className="mainTemperature">
        <strong id="temperature">{Math.round(weatherData.temperature)}</strong>
        <span className="units">
          <button className="fahrenheit-link">°F |</button>
          <button className="celsius1">°C</button>
          
        </span>
      </div>
    </div>
  );
} else {
  search();
    return "Loading...";
}
 
 }