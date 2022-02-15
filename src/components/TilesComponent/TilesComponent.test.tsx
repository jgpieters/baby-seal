import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TilesComponent from "./TilesComponent";

describe("<TilesComponent />", () => {
  const data = {
    intro: {
      title: "Intro title",
      text: "Intro text",
    },
    tiles: [
      {
        title: "title",
        text: "text",
        image: "image",
        date: "date",
      },
    ],
  };

  test("it should mount", () => {
    render(<TilesComponent data={data} />);

    const tilesComponent = screen.getByTestId("TilesComponent");

    expect(tilesComponent).toBeInTheDocument();
  });
});
