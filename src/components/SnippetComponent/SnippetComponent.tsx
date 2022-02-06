import React from "react";
import styled from "styled-components";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

enum View {
  IMAGE_LEFT = "image-left",
  IMAGE_RIGHT = "image-right",
}

const Title: any = styled.h1``;
const Paragraph: any = styled.p`
  white-space: pre-wrap;
`;

const SnippetComponent = ({ data, view }: Props) => (
  <Container>
    <Row data-testid="SnippetComponent">
      <Col
        sm="12"
        md={{ span: 4, offset: 2 }}
        style={view === View.IMAGE_LEFT ? { order: 0 } : { order: 1 }}
      >
        <Title>{data.title}</Title>
        <Paragraph>{data.text}</Paragraph>
      </Col>
      <Col
        sm="12"
        md={{ span: 4 }}
        style={view === View.IMAGE_LEFT ? { order: 1 } : { order: 0 }}
      >
        <img src={data.image} alt="" />
      </Col>
    </Row>
  </Container>
);

export default SnippetComponent;

interface SnippetData {
  title: string;
  text: string;
  image: string;
}

interface Props {
  data: SnippetData;
  view?: View;
}
