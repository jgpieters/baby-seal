import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import VideoSnippetComponent from "./VideoSnippetComponent";
import { Link } from "../../model/model";

describe("<VideoSnippetComponent />", () => {
  const data = {
    title: "title",
    text: "text",
    date: undefined,
    video: "video",
    primaryButton: {
      title: "title 2",
      text: "text 2",
      href: "href 2",
      target: "_blank",
    } as Link,
    secondaryButton: {
      title: "title 2",
      text: "text 2",
      href: "href 2",
      target: "_blank",
    } as Link,
  };
  test("it should mount", () => {
    render(<VideoSnippetComponent data={data} />);

    const videoSnippetComponent = screen.getByTestId("VideoSnippetComponent");

    expect(videoSnippetComponent).toBeInTheDocument();
  });
});
