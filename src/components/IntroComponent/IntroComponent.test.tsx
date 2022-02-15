import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import IntroComponent from "./IntroComponent";
import { Link } from "../../model/model";

describe("<IntroComponent />", () => {
  let data = {
    title: "title",
    text: "text",
    signature: "signature",
    primaryButton: {
      title: "title 1",
      text: "text 1",
      href: "href 1",
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
    render(<IntroComponent data={data} />);

    const introComponent = screen.getByTestId("IntroComponent");

    expect(introComponent).toBeInTheDocument();
  });
});
