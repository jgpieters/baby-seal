import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BlogIntroComponent from "./BlogIntroComponent";

describe("<BlogIntro />", () => {
  test("it should mount", () => {
    render(<BlogIntroComponent data={{} as any} />);

    const blogIntroComponent = screen.getByTestId("BlogIntroComponent");

    expect(blogIntroComponent).toBeInTheDocument();
  });
});
