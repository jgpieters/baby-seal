import styled from "styled-components";
import classNames from "classnames";

const Button: any = styled.a`
  margin-right: 4px;
`;

const ButtonComponent = ({ data, type }: Props) => (
  <Button
    className={classNames({
      btn: true,
      "btn-primary": type === "primary",
      "btn-outline-primary": type === "secondary",
    })}
    href={data.href}
    target={data.target}
    title={data.title}
    role="button"
    data-testid="ButtonComponent"
  >
    {data.text}
  </Button>
);

export default ButtonComponent;

export interface ButtonData {
  href: string;
  target?: string;
  text: string;
  title?: any;
}

interface Props {
  data: ButtonData;
  type: "secondary" | "primary";
}
