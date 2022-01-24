import React from "react";

const LinkComponent = ({ data }: Props) => (
  <a href={data.href} target={data.target} title={data.title}>
    {data.text}
  </a>
);

export default LinkComponent;

export interface Link {
  href: string;
  text: string;
  title?: string;
  target: "_blank" | "_self" | "_parent" | "_top";
}

interface Props {
  data: Link;
}
