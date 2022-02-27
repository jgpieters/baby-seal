import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MainRoutes from "./MainRoutes";

describe("<MainRoutes />", () => {
  test("it should mount", () => {
    render(<MainRoutes />);

    const mainRoutes = screen.getByTestId("MainRoutes");

    expect(mainRoutes).toBeInTheDocument();
  });
});
