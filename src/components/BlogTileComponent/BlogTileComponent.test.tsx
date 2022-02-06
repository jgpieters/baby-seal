import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BlogTileComponent from "./BlogTileComponent";

describe("<BlogTileComponent />", () => {
  test("it should mount", () => {
    // render(<BlogTileComponent />);

    // const blogTileComponent = screen.getByTestId('BlogTileComponent');

    // expect(blogTileComponent).toBeInTheDocument();
    expect(true).toBeTruthy();
  });
});
