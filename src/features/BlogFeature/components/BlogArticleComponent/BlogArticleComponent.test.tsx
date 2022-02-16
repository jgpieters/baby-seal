import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BlogArticleComponent from "./BlogArticleComponent";

describe("<BlogArticleComponent />", () => {
  test("it should mount", () => {
    render(<BlogArticleComponent />);

    const blogArticleComponent = screen.getByTestId(
      "BlogArticleComponentLoading"
    );

    expect(blogArticleComponent).toBeInTheDocument();
  });
});
