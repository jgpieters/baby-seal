import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ButtonComponent from "./ButtonComponent";

describe("<ButtonComponent />", () => {
  test("it should mount", () => {
    render(<ButtonComponent data={{} as any} type="primary"></ButtonComponent>);

    const buttonComponent = screen.getByTestId("ButtonComponent");

    expect(buttonComponent).toBeInTheDocument();
  });
});
