import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherDay from "../components/weather-day";

test("renders correctly weather information", () => {
  const city = "London";
  const current_temp = 25;

  render(<WeatherDay city={city} current_temp={current_temp} error={null} />);

  const tempNumber = screen.getByText(`${current_temp}°C`);
  expect(tempNumber).toBeInTheDocument();

  const weekday = screen.getByText("Today");
  expect(weekday).toBeInTheDocument();

  const cityInfo = screen.getByText(`City - ${city}`);
  expect(cityInfo).toBeInTheDocument();
});

test("renders error message", () => {
  const error = "Error retrieving weather data";

  render(<WeatherDay city={null} current_temp={null} error={error} />);

  const errorMessage = screen.getByText(error);
  expect(errorMessage).toBeInTheDocument();
});
