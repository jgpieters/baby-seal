import React, { FC } from "react";
import styles from "./BlogSnippetComponent.module.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Blog } from "../../model/model";

interface BlogSnippetProps {
  data: Blog;
}

const BlogSnippetComponent: FC<BlogSnippetProps> = (props) => {
  const { title, text, image } = props.data;

  return (
    <Container className={styles.BlogSnippetComponent}>
      <Row data-testid="BlogSnippetComponent">
        <Col sm="12" md={{ span: 4, offset: 2 }}>
          <h1>{title}</h1>
          <p>{text}</p>
        </Col>
        <Col sm="12" md={{ span: 4 }}>
          <img src={image} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default BlogSnippetComponent;
