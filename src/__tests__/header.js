import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/header";

test("renders without errors", () => {
  render(<Header />);
});

test("renders header elements correctly", () => {
  render(<Header />);

  const appNameElement = screen.getByText(/Weather forecast/i);
  const inputElement = screen.getByPlaceholderText(/Enter city/i);
  const buttonElement = screen.getByRole("button", { name: /search/i });

  expect(appNameElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test("updates city value when input changes", () => {
  render(<Header />);

  const inputElement = screen.getByPlaceholderText(/Enter city/i);
  fireEvent.change(inputElement, { target: { value: "New York" } });

  expect(inputElement.value).toBe("New York");
});

test("submits form and calls props.weatherMethod with correct city", () => {
  const mockWeatherMethod = jest.fn();
  render(<Header weatherMethod={mockWeatherMethod} />);

  const inputElement = screen.getByPlaceholderText(/Enter city/i);
  const buttonElement = screen.getByRole("button", { name: /search/i });
  fireEvent.change(inputElement, { target: { value: "New York" } });
  fireEvent.click(buttonElement);

  expect(mockWeatherMethod).toHaveBeenCalledTimes(1);
  expect(mockWeatherMethod).toHaveBeenCalledWith("New York");
});
