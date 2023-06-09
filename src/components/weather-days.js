import React, { useState, useEffect } from "react";
import closeImg from '../images/close.png';
import shortsImg from "../images/shirt-shorts.jpg";
import hoodieImg from "../images/hoodie-pants.jpg";
import jacketImg from "../images/jacket.png";
import coatImg from "../images/coat.png";
import winterImg from "../images/winter-jacket.png";

function WeatherForDays({ forecastData }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  

  const handleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  

  const renderModalContent = () => {
    if (expandedIndex !== null) {
      const { day } = forecastData[expandedIndex];
      const { astro } = forecastData[expandedIndex];
      if (expandedIndex === 0) {
        return (
          <div className="forecast">
            <div className="details-forecast">
              <p className="details_indicator">Temperature</p>
              <p className="details_information">
                Max - {day.maxtemp_c}°C, min - {day.mintemp_c}°C
              </p>
            </div>
            <div className="details-forecast">
              <p className="details_indicator">Weather description</p>
              <p className="details_information">{day.condition.text}</p>
            </div>
            <div className="details-forecast">
              <p className="details_indicator">Sunrise</p>
              <p className="details_information">{astro.sunrise}</p>
            </div>
            <div className="details-forecast">
              <p className="details_indicator">Sunset</p>
              <p className="details_information">{astro.sunset}</p>
            </div>
            <div>
              <button onClick={closeModal} className="button-modal">
                <img src={closeImg} alt="close" className="close-img" />
              </button>
            </div>
          </div>
        );
      } else if (expandedIndex === 1) {
        return (
          <div className="forecast">
            <div className="details-forecast">
              <p className="details_indicator">Temperature</p>
              <p className="details_information">
                Max - {day.maxtemp_c}°C, min - {day.mintemp_c}°C
              </p>
            </div>
            <div className="details-forecast">
              <p className="details_indicator">Weather description</p>
              <p className="details_information">{day.condition.text}</p>
            </div>
            <div className="details-forecast">
              <p className="details_indicator">Sunrise</p>
              <p className="details_information">{astro.sunrise}</p>
            </div>
            <div className="details-forecast">
              <p className="details_indicator">Sunset</p>
              <p className="details_information">{astro.sunset}</p>
            </div>
            <div>
              <button onClick={closeModal} className="button-modal">
                <img src={closeImg} alt="close" className="close-img" />
              </button>
            </div>
          </div>
        );
      } else if (expandedIndex === 2) {
        return (
          <div className="forecast">
            <div className="details-forecast">
              <p className="details_indicator">Temperature</p>
              <p className="details_information">
                Max - {day.maxtemp_c}°C, min - {day.mintemp_c}°C
              </p>
            </div>
            <div className="details-forecast">
              <p className="details_indicator">Weather description</p>
              <p className="details_information">{day.condition.text}</p>
            </div>
            <div className="details-forecast">
              <p className="details_indicator">Sunrise</p>
              <p className="details_information">{astro.sunrise}</p>
            </div>
            <div className="details-forecast">
              <p className="details_indicator">Sunset</p>
              <p className="details_information">{astro.sunset}</p>
            </div>
            <div>
              <button onClick={closeModal} className="button-modal">
                <img src={closeImg} alt="close" className="close-img" />
              </button>
            </div>
          </div>
        );
      } else if (expandedIndex === 3) {
        return (
          <div className="forecast">
            <div className="details-forecast">
              <p className="details_indicator">Temperature</p>
              <p className="details_information">
                Max - {day.maxtemp_c}°C, min - {day.mintemp_c}°C
              </p>
            </div>
            <div className="details-forecast">
              <p className="details_indicator">Weather description</p>
              <p className="details_information">{day.condition.text}</p>
            </div>
            <div className="details-forecast">
              <p className="details_indicator">Sunrise</p>
              <p className="details_information">{astro.sunrise}</p>
            </div>
            <div className="details-forecast">
              <p className="details_indicator">Sunset</p>
              <p className="details_information">{astro.sunset}</p>
            </div>
            <div>
              <button onClick={closeModal} className="button-modal">
                <img src={closeImg} alt="close" className="close-img" />
              </button>
            </div>
          </div>
        );
      }
    }
    return null;
  };

  const getWeatherImage = (temperature) => {
    if (temperature > 20) {
      return shortsImg;
    } else if (temperature >= 15 && temperature <= 20) {
      return hoodieImg;
    } else if (temperature >= 5 && temperature < 15) {
      return jacketImg;
    } else if (temperature >= 0 && temperature < 5) {
      return coatImg;
    } else {
      return winterImg;
    }
  };

  const renderWeatherCards = () => {
    return forecastData.map((day, index) => (
      <div className="card" key={index}>
        <a className="card_day" onClick={() => handleExpand(index)}>
          {day.date}
        </a>
        <br />
        <img
          src={getWeatherImage(day.day.maxtemp_c)}
          alt={day.day.condition.text}
          title={day.day.condition.text}
        />
        <p className="card_temp">{day.day.maxtemp_c}</p>
        <p className="card_temp_min">{day.day.mintemp_c}</p>
      </div>
    ));
  };

    return (
      <div>
        {forecastData && (
          <div className="weather-container">
            {renderWeatherCards()}
            {showModal && (
                <div>
                    {renderModalContent()}
                    <div onClick={closeModal}>
                             
                    </div>
                </div>
            )}
          </div>
        )}
      </div>
    );

}

export default WeatherForDays;
