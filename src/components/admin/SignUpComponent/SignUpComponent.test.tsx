import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SignUpComponent from "./SignUpComponent";

describe("<SignUpComponent />", () => {
  test("it should mount", () => {
    render(<SignUpComponent onSubmit={() => {}} />);

    const signUpComponent = screen.getByTestId("SignUpComponent");

    expect(signUpComponent).toBeInTheDocument();
  });
});
