import React from "react";
import tempImg from "../images/temp.svg";

function WeatherDetails() {
  return (
    <div>
        <div className="details-container">
          <div className="details">
            <div className="details_img">
              <img src={tempImg} alt="Temperature" />
            </div>
            <p className="details_indicator">Temperature</p>
            <p className="details_information">
              20°C - feels lik 20°C
            </p>
          </div>
          <div className="details">
            <div className="details_img">
              <img src={tempImg} alt="Temperature" />
            </div>
            <p className="details_indicator">Weather description</p>
            <p className="details_information">description</p>
          </div>
          <div className="details">
            <div className="details_img">
              <img src={tempImg} alt="Temperature" />
            </div>
            <p className="details_indicator">Sunrise</p>
            <p className="details_information">sunrise</p>
          </div>
          <div className="details">
            <div className="details_img">
              <img src={tempImg} alt="Temperature" />
            </div>
            <p className="details_indicator">Sunset</p>
            <p className="details_information">sunset</p>
          </div>
        </div>
    </div>
  );
}

export default WeatherDetails;
