import React, { FC } from "react";
import classNames from "classnames";
import { Link } from "../../model/model";
import styles from "./ButtonComponents.module.scss";

type ButtonComponentProps = {
  data: Link;
  type: "primary" | "secondary";
};

const ButtonComponent: FC<ButtonComponentProps> = (props) => {
  const { data, type } = props;
  const { title, target, href, text } = data;

  return (
    <a
      className={
        styles.ButtonComponent +
        " " +
        classNames({
          btn: true,
          "btn-primary": type === "primary",
          "btn-outline-primary": type === "secondary",
        })
      }
      href={href}
      target={target}
      title={title}
      role="button"
      data-testid="ButtonComponent"
    >
      {text}
    </a>
  );
};

export default ButtonComponent;
