import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ArticleComponent from "./ArticleComponent";

describe("<ArticleComponent />", () => {
  const color = "#123456";
  const children = <p>children</p>;

  test("it should mount", () => {
    render(<ArticleComponent color={color}>{children}</ArticleComponent>);

    const articleComponent = screen.getByTestId("ArticleComponent");

    expect(articleComponent).toBeInTheDocument();
  });
});
