import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";


test("renders header links", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const homeLink = screen.getByText("Home");
  const aboutLink = screen.getByText("About");

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
});

test("renders component CurrentWeather ", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const currentWeatherComponent = screen.getByTestId("current-weather");
  expect(currentWeatherComponent).toBeInTheDocument();
});

test("renders  component AboutApp", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const aboutAppComponent = screen.getByTestId("about-app");
  expect(aboutAppComponent).toBeInTheDocument();
});

test("renders CurrentWeather component on home route", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  const currentWeatherComponent = screen.getByTestId("current-weather");
  expect(currentWeatherComponent).toBeInTheDocument();
});

test("renders AboutApp component on about route", () => {
  render(
    <MemoryRouter initialEntries={["/about"]}>
      <App />
    </MemoryRouter>
  );

  const aboutAppComponent = screen.getByTestId("about-app");
  expect(aboutAppComponent).toBeInTheDocument();
});
