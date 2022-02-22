import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MasonryComponent from "./MasonryComponent";

describe("<MasonryComponent />", () => {
  test("it should mount", () => {
    render(
      <MasonryComponent>
        <div></div>
        <div></div>
      </MasonryComponent>
    );

    const masonryComponent = screen.getByTestId("MasonryComponent");

    expect(masonryComponent).toBeInTheDocument();
  });
});
