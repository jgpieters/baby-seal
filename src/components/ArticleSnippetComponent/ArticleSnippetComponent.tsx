import React from "react";
import styled from "styled-components";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Title: any = styled.h1``;
const Paragraph: any = styled.p``;

const ArticleSnippetComponent = ({ data }: Props) => (
  <Container>
    <Row data-testid="ArticleSnippetComponent">
      <Col sm="12" md={{ span: 4, offset: 2 }}>
        <Title>{data.title}</Title>
        <Paragraph>{data.text}</Paragraph>
      </Col>
      <Col sm="12" md={{ span: 4 }}>
        <img src={data.image} />
      </Col>
    </Row>
  </Container>
);

export default ArticleSnippetComponent;

interface ArticleSnippetData {
  title: string;
  text: string;
  image: string;
}

interface Props {
  data: ArticleSnippetData;
}
