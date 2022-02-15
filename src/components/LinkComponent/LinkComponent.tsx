import React, { FC } from "react";
import { Link } from "../../model/model";
import styles from "./LinkComponent.module.scss";

interface LinkComponentProps {
  data: Link;
}

const LinkComponent: FC<LinkComponentProps> = (props) => {
  const { href, target, title, text } = props.data;

  return (
    <a
      className={styles.FullScreenImageComponent}
      href={href}
      target={target}
      title={title}
      data-testid="LinkComponent"
    >
      {text}
    </a>
  );
};

export default LinkComponent;
