import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SignupPage from "./SignupPage";

describe("<SignupPage />", () => {
  test("it should mount", () => {
    render(<SignupPage />);

    const signupPage = screen.getByTestId("SignupPage");

    expect(signupPage).toBeInTheDocument();
  });
});
