import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PrivateRoute from "./PrivateRouteComponent";

describe("<PrivateRoute />", () => {
  test("it should mount", () => {
    render(<PrivateRoute />);

    const adminRoutes = screen.getByTestId("PrivateRoute");

    expect(adminRoutes).toBeInTheDocument();
  });
});
