import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BlogTileComponent from "./BlogTileComponent";
import { Blog } from "../../model/model";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("<BlogTileComponent />", () => {
  let data: Blog = {
    title: "Blog title",
    text: "Text",
    image: "Image",
    date: new Date(2021, 1, 1),
    author: "Blog Athor",
    paragraphs: [],
  };

  let href = "href";

  test("it should mount", () => {
    render(<BlogTileComponent data={data} href={href} />);
    const blogTileComponent = screen.getByTestId("BlogTileComponent");
    expect(blogTileComponent).toBeInTheDocument();
  });
});
