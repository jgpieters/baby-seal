import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LinkComponent from "./LinkComponent";

describe("<LinkComponent />", () => {
  test("it should mount", () => {
    render(<LinkComponent data={{} as any} />);

    const linkComponent = screen.getByTestId("LinkComponent");

    expect(true).toBeTruthy();
  });
});
