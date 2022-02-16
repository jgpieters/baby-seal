import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FullScreenImageComponent from "./FullScreenImageComponent";

describe("<FullScreenImageComponent />", () => {
  const image = "test.jpg";
  const children = <h1>test</h1>;

  test("it should mount", () => {
    render(
      <FullScreenImageComponent image={image}>
        {children}
      </FullScreenImageComponent>
    );

    const fullScreenImageComponent = screen.getByTestId(
      "FullScreenImageComponent"
    );

    expect(fullScreenImageComponent).toBeInTheDocument();
  });
});
