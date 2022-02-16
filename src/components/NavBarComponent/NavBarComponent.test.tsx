import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBarComponent from "./NavBarComponent";
import { BrowserRouter } from "react-router-dom";

describe("<NavBarComponent />", () => {
  test("it should mount", () => {
    render(
      <BrowserRouter>
        <NavBarComponent />
      </BrowserRouter>
    );

    const navBarComponent = screen.getByTestId("NavBarComponent");

    expect(navBarComponent).toBeInTheDocument();
  });
});
