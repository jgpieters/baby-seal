import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TileComponent from "./TileComponent";

describe("<Tile />", () => {
  test("it should mount", () => {
    render(<TileComponent data={{} as any} />);

    const tileComponent = screen.getByTestId("TileComponent");

    expect(tileComponent).toBeInTheDocument();
  });
});
