import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LinkComponent from "./LinkComponent";
import { Link } from "../../model/model";

describe("<LinkComponent />", () => {
  const data: Link = {
    title: "title 2",
    text: "text 2",
    href: "href 2",
    target: "_blank",
  };

  test("it should mount", () => {
    render(<LinkComponent data={data} />);

    const linkComponent = screen.getByTestId("LinkComponent");

    expect(linkComponent).toBeInTheDocument();
  });
});
