import React, { useState, useEffect } from "react";
import closeImg from '../images/close.png';

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
    const { day } = forecastData[expandedIndex];
    const { astro } = forecastData[expandedIndex];
    if (expandedIndex === 0) {
      return (
        <div className="forecast forecast-first">
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
          <div onClose={closeModal}>
            <button onClose={closeModal}>
              <img src={closeImg} className="close-img" />
            </button>
          </div>
        </div>
      );
    } else if (expandedIndex === 1) {
      return (
        <div className="forecast forecast-first">
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
        </div>
      );
    } else if (expandedIndex === 2) {
      return (
        <div className="forecast forecast-first">
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
        </div>
      );
    } else if (expandedIndex === 3) {
      return (
        <div className="forecast forecast-first">
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
          
        </div>
      );
    }
    return null;
  };

  const renderWeatherCards = () => {
    return forecastData.map((day, index) => (
      <div className="card" key={index}>
        <a className="card_day" onClick={() => handleExpand(index)}>
          {day.date}
        </a>
        <br />
        <img src={day.day.condition.icon} alt={day.day.condition.text} />
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
                    <div onClose={closeModal}>
                             
                    </div>
                </div>
            )}
          </div>
        )}
      </div>
    );

}

export default WeatherForDays;
