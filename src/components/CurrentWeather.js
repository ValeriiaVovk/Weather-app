import Header from "./header";
import WeatherDay from "./weather-day";
import WeatherForDays from "./weather-days";
import WeatherDetails from "./weather-details";
import { useState } from "react";

function CurrentWeather() {
  const [weatherData, setWeatherData] = useState({
    current_temp: undefined,
    city: undefined,
    feels_like: undefined,
    weather_description: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
  });

  //   const API_KEY = "dd8bbbe6e0f348fca2e131858232405";
  const [forecastData, setForecastData] = useState([]);

  const gettingWeather = async (city) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=dd8bbbe6e0f348fca2e131858232405&q=${city}&days=4&aqi=no&alerts=no`
      );
      const data = await response.json();
      console.log(data);
      if (city) {
        setWeatherData({
          current_temp: data.current.temp_c,
          city: data.location.name,
          feels_like: data.current.feelslike_c,
          weather_description: data.current.condition.text,
          sunrise: data.forecast.forecastday[0].astro.sunrise,
          sunset: data.forecast.forecastday[0].astro.sunset,
          error: undefined,
        });
        setForecastData(data.forecast.forecastday);
      } else {
        setWeatherData({
          current_temp: undefined,
          city: undefined,
          feels_like: undefined,
          weather_description: undefined,
          sunrise: undefined,
          sunset: undefined,
          error: "Enter a name of city!",
        });
      }
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  };


  return (
    <div className="App">
      <Header weatherMethod={gettingWeather} />
      <div className="main-container">
        <div>
          <WeatherDay
            current_temp={Math.round(weatherData.current_temp)}
            city={weatherData.city}
            error={weatherData.error}
          />
        </div>
        <div>
          <WeatherDetails
            current_temp={Math.round(weatherData.current_temp)}
            city={weatherData.city}
            feels_like={Math.round(weatherData.feels_like)}
            weather_description={weatherData.weather_description}
            sunrise={weatherData.sunrise}
            sunset={weatherData.sunset}
          />
        </div>
      </div>
      <WeatherForDays forecastData={forecastData} />
    </div>
  );
}

export default CurrentWeather;
