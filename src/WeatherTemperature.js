import React, { useState} from "react";
import "./App.css";
import "./MainDisplay.css";

export default function WeatherTemperature(props){
const [unit, setUnit] = useState("fahrenheit");
    
if (unit ==="fahrenheit") {
return (
 <div className="mainTemperature">
        
        <strong id="temperature">{Math.round(props.fahrenheit)}</strong>
        <span className="units">
          <span className="unit" id="fahrenheitUnit">°F |</span>
          <span className="unit" id="celsiusUnit">°C</span>
          
        </span>
      </div>
    );
}
}