import React, { useState} from "react";
import "./App.css";
import "./MainDisplay.css";

export default function WeatherTemperature(props){
const [unit, setUnit] = useState("fahrenheit");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function celsius() {
    return (props.fahrenheit - 32) * 5/9;
  }


if (unit ==="fahrenheit") {
return (
    <div className="mainTemperature">
        
      <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
            °F | 
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          
        </span>
        </div>

          );
          
}else{
return (
      <div className="mainTemperature">
         <span className="temperature">{Math.round(celsius())}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
        
        </div>
    
); 
    
 
        
      
}
}