import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ArticleSnippetComponent from "./ArticleSnippetComponent";

describe("<ArticleSnippet />", () => {
  test("it should mount", () => {
    render(<ArticleSnippetComponent data={{} as any} />);

    const articleSnippet = screen.getByTestId("ArticleSnippet");

    expect(articleSnippet).toBeInTheDocument();
  });
});
