import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RatioContainerComponent from "./RatioContainerComponent";

describe("<RatioDiv />", () => {
  test("it should mount", () => {
    render(
      <RatioContainerComponent ratio="100%">test</RatioContainerComponent>
    );

    const ratioDiv = screen.getByTestId("RatioContainerComponent");

    expect(ratioDiv).toBeInTheDocument();
  });
});
