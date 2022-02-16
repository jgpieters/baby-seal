import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BlogIntroComponent from "./BlogIntroComponent";
import { Blog } from "../../model/model";

describe("<BlogIntro />", () => {
  let data: Blog = {
    title: "Blog title",
    text: "Text",
    image: "Image",
    date: new Date(2022, 1, 1),
    author: "Blog Athor",
    paragraphs: [],
  };

  test("it should mount", () => {
    render(<BlogIntroComponent data={data} />);

    const blogIntroComponent = screen.getByTestId("BlogIntroComponent");

    expect(blogIntroComponent).toBeInTheDocument();
  });
});
