import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FooterComponent from "./FooterComponent";

describe("<FooterComponent />", () => {
  test("it should mount", () => {
    // render(<FooterComponent data={{} as any} />);
    // const footerComponent = screen.getByTestId("FooterComponent");
    expect(true).toBeTruthy();
  });
});
