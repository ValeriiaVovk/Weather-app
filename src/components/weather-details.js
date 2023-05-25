import React from "react";
import tempImg from "../images/temp.svg";

function WeatherDetails(props) {
  return (
    <div>
      {props.city && (
        <div className="details-container">
          <div className="details">
            <div className="details_img">
              <img src={tempImg} alt="Temperature" />
            </div>
            <p className="details_indicator">Temperature</p>
            <p className="details_information">
              {Math.round(props.current_temp)}°C - feels like{" "}
              {Math.round(props.feels_like)}°C
            </p>
          </div>
          <div className="details">
            <div className="details_img">
              <img src={tempImg} alt="Temperature" />
            </div>
            <p className="details_indicator">Weather description</p>
            <p className="details_information">{props.weather_description}</p>
          </div>
          <div className="details">
            <div className="details_img">
              <img src={tempImg} alt="Temperature" />
            </div>
            <p className="details_indicator">Sunrise</p>
            <p className="details_information">{props.sunrise}</p>
          </div>
          <div className="details">
            <div className="details_img">
              <img src={tempImg} alt="Temperature" />
            </div>
            <p className="details_indicator">Sunset</p>
            <p className="details_information">{props.sunset}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherDetails;
