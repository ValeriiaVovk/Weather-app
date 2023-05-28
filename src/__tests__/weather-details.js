import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherDetails from "../components/weather-details";

test("renders corectly weather details", () => {
  const city = "London";
  const current_temp = 20;
  const feels_like = 22;
  const weather_description = "Cloudy";
  const sunrise = "06:30 AM";
  const sunset = "08:25 PM";

  render(
    <WeatherDetails
      city={city}
      current_temp={current_temp}
      feels_like={feels_like}
      weather_description={weather_description}
      sunrise={sunrise}
      sunset={sunset}
    />
  );

  const temperatureIndicator = screen.getByText("Temperature");
  expect(temperatureIndicator).toBeInTheDocument();

  const temperatureInformation = screen.getByText(
    `${Math.round(current_temp)}°C - feels like ${Math.round(feels_like)}°C`
  );
  expect(temperatureInformation).toBeInTheDocument();

  const weatherDescriptionIndicator = screen.getByText("Weather description");
  expect(weatherDescriptionIndicator).toBeInTheDocument();

  const weatherDescriptionInformation = screen.getByText(weather_description);
  expect(weatherDescriptionInformation).toBeInTheDocument();

  const sunriseIndicator = screen.getByText("Sunrise");
  expect(sunriseIndicator).toBeInTheDocument();

  const sunriseInformation = screen.getByText(sunrise);
  expect(sunriseInformation).toBeInTheDocument();

  const sunsetIndicator = screen.getByText("Sunset");
  expect(sunsetIndicator).toBeInTheDocument();

  const sunsetInformation = screen.getByText(sunset);
  expect(sunsetInformation).toBeInTheDocument();
});

test("does not render weather details when city is not written in input", () => {
  const city = null;
  const current_temp = null;
  const feels_like = null;
  const weather_description = null;
  const sunrise = null;
  const sunset = null;

  render(
    <WeatherDetails
      city={city}
      current_temp={current_temp}
      feels_like={feels_like}
      weather_description={weather_description}
      sunrise={sunrise}
      sunset={sunset}
    />
  );

  const temperatureIndicator = screen.queryByText("Temperature");
  expect(temperatureIndicator).toBeNull();

  const temperatureInformation = screen.queryByText(
    `${Math.round(current_temp)}°C - feels like ${Math.round(feels_like)}°C`
  );
  expect(temperatureInformation).toBeNull();

  const weatherDescriptionIndicator = weather_description
    ? screen.queryByText("Weather description")
    : null;
  expect(weatherDescriptionIndicator).toBeNull();

  const weatherDescriptionInformation = weather_description
    ? screen.queryByText(weather_description)
    : null;
  expect(weatherDescriptionInformation).toBeNull();

  const sunriseIndicator = screen.queryByText("Sunrise");
  expect(sunriseIndicator).toBeNull();

  const sunriseInformation = sunrise ? screen.queryByText(sunrise) : null;
  expect(sunriseInformation).toBeNull();

  const sunsetIndicator = screen.queryByText("Sunset");
  expect(sunsetIndicator).toBeNull();

  const sunsetInformation = sunset ? screen.queryByText(sunset) : null;
  expect(sunsetInformation).toBeNull();
});
