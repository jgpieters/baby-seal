import React, { FC } from "react";
import styles from "./SnippetComponent.module.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

enum View {
  IMAGE_LEFT = "image-left",
  IMAGE_RIGHT = "image-right",
}

type SnippetComponentProps = {
  data: SnippetData;
  view?: View;
};

const SnippetComponent: FC<SnippetComponentProps> = (props) => {
  const { data, view } = props;
  const { title, text, image } = data;

  return (
    <Container className={styles.SnippetComponent}>
      <Row data-testid="SnippetComponent">
        <Col
          sm="12"
          md={{ span: 4, offset: 2 }}
          style={view === View.IMAGE_LEFT ? { order: 0 } : { order: 1 }}
        >
          <h1>{title}</h1>
          <p>{text}</p>
        </Col>
        <Col
          sm="12"
          md={{ span: 4 }}
          style={view === View.IMAGE_LEFT ? { order: 1 } : { order: 0 }}
        >
          <img src={image} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default SnippetComponent;

interface SnippetData {
  title: string;
  text: string;
  image: string;
}
