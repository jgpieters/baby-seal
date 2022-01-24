import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ArticleComponent from "./ArticleComponent";

describe("<ArticleComponent />", () => {
  test("it should mount", () => {
    render(<ArticleComponent color="#123"> </ArticleComponent>);

    const articleComponent = screen.getByTestId("ArticleComponent");

    expect(articleComponent).toBeInTheDocument();
  });
});
