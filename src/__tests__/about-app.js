import React from "react";
import { render, screen } from "@testing-library/react";
import AboutApp from "../components/about-app";

test("render component AboutApp", () => {
  render(<AboutApp />);
  const aboutAppComponent = screen.getByTestId("about-app");
  expect(aboutAppComponent).toBeInTheDocument();
});

test("render heading 'About this Weather-app'", () => {
  render(<AboutApp />);
  const heading = screen.getByText("About this Weather-app");
  expect(heading).toBeInTheDocument();
});

test("render correct length of list items", () => {
  render(<AboutApp />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(9);
});
