import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SignupComponent from "./SignupComponent";

describe("<SignupComponent />", () => {
  test("it should mount", () => {
    render(<SignupComponent onSubmit={() => {}} />);

    const signupComponent = screen.getByTestId("SignupComponent");

    expect(signupComponent).toBeInTheDocument();
  });
});
