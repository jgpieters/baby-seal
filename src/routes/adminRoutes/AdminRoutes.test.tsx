import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AdminRoutes from "./AdminRoutes";

describe("<AdminRoutes />", () => {
  test("it should mount", () => {
    render(<AdminRoutes />);

    const adminRoutes = screen.getByTestId("AdminRoutes");

    expect(adminRoutes).toBeInTheDocument();
  });
});
