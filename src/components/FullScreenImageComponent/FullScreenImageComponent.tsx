import React, { FC } from "react";
import styles from "./FullScreenImageComponent.module.scss";
import Container from "react-bootstrap/Container";

type FullScreenImageComponentProps = {
  image: string;
  children: any;
};

const FullScreenImageComponent: FC<FullScreenImageComponentProps> = (props) => {
  const { children, image } = props;
  return (
    <div
      className={styles.FullScreenImageComponent}
      data-testid="FullScreenImageComponent"
    >
      <div
        className={styles.innerContainer}
        style={{ backgroundImage: "url(" + image + ")" }}
      ></div>
      <div className={styles.contentContainer}>
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default FullScreenImageComponent;
