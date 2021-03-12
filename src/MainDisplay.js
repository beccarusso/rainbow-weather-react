import React, { useState} from "react";
import "./App.css";
import "./SearchArea.css";
import "./MainDisplay.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import { faHome, faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



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
         <div className="SearchArea">
            <div className="searchBar" id="searchBar">
              <form onSubmit={handleSubmit}
                    className="form-inline md-form mr-auto mb-4" id="search-form">
          
          <div className="row">
            <div className="col-9">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Enter a city.."
                aria-label="Search"
                id="city-input"
                autofocus="on"
                onChange={handleCityChange}
              />
            </div>

            <div className="col-3">
              <button className="searchButton" type="submit" id="searchButton">
            
                <FontAwesomeIcon icon={faSearch} id="searchIcon" />
              </button>
            </div>

            
          </div>
        </form>
      </div>
    </div>
    <WeatherInfo data={weatherData} />
    </div>
  );
} else {
  search();
    return "Loading...";
}
 
 }