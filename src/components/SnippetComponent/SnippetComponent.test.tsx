import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SnippetComponent from "./SnippetComponent";

describe("<Snippet />", () => {
  test("it should mount", () => {
    render(<SnippetComponent data={{} as any} />);

    const Snippet = screen.getByTestId("SnippetComponent");

    expect(Snippet).toBeInTheDocument();
  });
});
