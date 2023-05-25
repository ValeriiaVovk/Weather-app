import React from "react";
import '../styles/styles.css';

function WeatherDay(props) {
  return (
    <div>
      {props.city && (
        <div className="day-container">
          <div className="weather-info">
            <div className="temp-info">
              <h2 className="temp-info_number">{props.current_temp}°C</h2>
              <h3 className="temp-info_weekday">Today</h3>
            </div>
            <div className="img-info">
              <img />
            </div>
          </div>
          <p className="weather-city">City - {props.city} </p>
        </div>
      )}
      <p className="error">{props.error}</p>
    </div>
  );
}

export default WeatherDay;
