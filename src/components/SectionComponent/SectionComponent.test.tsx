import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SectionComponent from "./SectionComponent";

describe("<SectionComponent />", () => {
  test("it should mount", () => {
    render(<SectionComponent color={"#112233"}>Test</SectionComponent>);

    const sectionComponent = screen.getByTestId("SectionComponent");

    expect(sectionComponent).toBeInTheDocument();
  });
});
