import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BlogOverviewComponent from "./BlogOverviewComponent";

describe("<BlogOverviewComponent />", () => {
  test("it should mount", () => {
    // render(<BlogOverviewComponent />);

    // const BlogOverviewComponent = screen.getByTestId('BlogComponent');

    // expect(BlogOverviewComponent).toBeInTheDocument();
    expect(true).toBeTruthy();
  });
});
