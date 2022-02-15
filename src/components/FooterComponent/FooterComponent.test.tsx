import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FooterComponent from "./FooterComponent";
import { Footer } from "../../model/model";

describe("<FooterComponent />", () => {
  const data: Footer = {
    links: [
      {
        href: "Link href",
        text: "Link text",
        title: "Link title",
        target: "_self",
      },
    ],
    about: {
      title: "about title",
      text: "about text",
    },
    contact: {
      email: {
        href: "mailto:test@teast.nl",
        text: "Email link text",
        title: "Email link title",
        target: "_self",
      },
      website: {
        href: "Website link",
        text: "Website link text",
        title: "Website link title",
        target: "_self",
      },
      socialmedia: [
        {
          icon: "social media icon",
          href: "socialmediaurl.nl",
        },
      ],
    },
  };

  test("it should mount", () => {
    render(<FooterComponent data={data} />);
    const footerComponent = screen.getByTestId("FooterComponent");
    expect(footerComponent).toBeInTheDocument();
  });
});
