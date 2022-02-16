import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BlogParagraphComponent from "./BlogParagraphComponent";
import { BlogParagraph } from "../../model/model";

describe("<BlogParagraph />", () => {
  let data: BlogParagraph = {
    title: "Paragraph title",
    text: "Paragraph text",
    image: "Paragraph image",
    quote: "Paragraph quote",
  };

  test("it should mount", () => {
    render(<BlogParagraphComponent data={data} />);

    const blogParagraphComponent = screen.getByTestId("BlogParagraphComponent");

    expect(blogParagraphComponent).toBeInTheDocument();
  });
});
