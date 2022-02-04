import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TilesComponent from "./TilesComponent";

describe("<TilesComponent />", () => {
  test("it should mount", () => {
    render(<TilesComponent data={{} as any} />);

    const tilesComponent = screen.getByTestId("TilesComponent");

    expect(true).toBeTruthy();
  });
});
