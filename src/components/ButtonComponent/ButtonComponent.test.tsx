import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ButtonComponent from "./ButtonComponent";
import { Link } from "../../model/model";

describe("<ButtonComponent />", () => {
  let data: Link = {
    href: "Link href",
    text: "Link text",
    title: "Link title",
    target: "_self",
  };

  const type = "primary";

  test("it should mount", () => {
    render(<ButtonComponent data={data} type={type}></ButtonComponent>);
    const buttonComponent = screen.getByTestId("ButtonComponent");
    expect(buttonComponent).toBeInTheDocument();
  });
});
