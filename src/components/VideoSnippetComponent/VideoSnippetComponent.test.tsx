import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import VideoSnippetComponent from "./VideoSnippetComponent";

describe("<VideoSnippetComponent />", () => {
  test("it should mount", () => {
    render(<VideoSnippetComponent data={{} as any} />);

    const videoSnippetComponent = screen.getByTestId("VideoSnippetComponent");

    expect(videoSnippetComponent).toBeInTheDocument();
  });
});
