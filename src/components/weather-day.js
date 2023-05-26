import React from "react";
import '../styles/styles.css';
import shortsImg from "../images/shirt-shorts.jpg";
import hoodieImg from "../images/hoodie-pants.jpg";
import jacketImg from "../images/jacket.png";
import coatImg from "../images/coat.png";
import winterImg from "../images/winter-jacket.png";

function WeatherDay(props) {

  let weatherImage;

  if (props.current_temp > 20) {
    weatherImage = shortsImg;
  } else if (props.current_temp >= 15 && props.current_temp <= 20) {
    weatherImage = hoodieImg;
  } else if (props.current_temp >= 5 && props.current_temp < 15) {
    weatherImage = jacketImg;
  } else if (props.current_temp >= 0 && props.current_temp < 5) {
    weatherImage = coatImg;
  } else {
    weatherImage = winterImg;
  }


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
              <img src={weatherImage} alt="Clothes"  />
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
