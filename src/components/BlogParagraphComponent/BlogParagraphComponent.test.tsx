import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BlogParagraphComponent from "./BlogParagraphComponent";

describe("<BlogParagraph />", () => {
  test("it should mount", () => {
    render(<BlogParagraphComponent data={{} as any} />);

    const blogParagraphComponent = screen.getByTestId("BlogParagraphComponent");

    expect(blogParagraphComponent).toBeInTheDocument();
  });
});
