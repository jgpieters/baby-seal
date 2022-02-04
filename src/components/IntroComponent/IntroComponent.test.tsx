import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import IntroComponent from "./IntroComponent";

describe("<IntroComponent />", () => {
  test("it should mount", () => {
    render(<IntroComponent data={{} as any} />);

    const introComponent = screen.getByTestId("IntroComponent");

    expect(true).toBeTruthy();
  });
});
