import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BlogSnippetComponent from "./BlogSnippetComponent";
import { Blog } from "../../model/model";

describe("<BlogSnippet />", () => {
  let data: Blog = {
    title: "Blog title",
    text: "Text",
    image: "Image",
    date: new Date(2022, 1, 1),
    author: "Blog Athor",
    paragraphs: [],
  };

  test("it should mount", () => {
    render(<BlogSnippetComponent data={data} />);

    const blogSnippet = screen.getByTestId("BlogSnippetComponent");
    expect(blogSnippet).toBeInTheDocument();
  });
});
