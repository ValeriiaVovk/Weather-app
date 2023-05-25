import React from "react";

function WeatherDay() {
  return (
    <div>
        <div className="day-container">
          <div className="weather-info">
            <div className="temp-info">
              <h2 className="temp-info_number">20°C</h2>
              <h3 className="temp-info_weekday">Today</h3>
            </div>
            <div className="img-info">
              <img />
            </div>
          </div>
          <p className="weather-city">City -  </p>
        </div>
      <p className="error"></p>
    </div>
  );
}

export default WeatherDay;
