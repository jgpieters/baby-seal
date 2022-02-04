import React from "react";
import styled from "styled-components";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import LinkComponent, { Link } from "../LinkComponent/LinkComponent";

const BackgroundContainer: any = styled.div`
  background-color: grey;
  position: relative;
  width: 100%;
  padding: 80px 0;
`;

const LinkContainer: any = styled.div`
  & > a {
    color: white;
  }
`;

const Title: any = styled.h2``;

const Text: any = styled.p``;

const FooterComponent = ({ data }: Props) => (
  <BackgroundContainer>
    <Container>
      <Row data-testid="ArticleSnippetComponent">
        <Col xs="12" md="6" lg="4">
          <Title>Menu</Title>
          {data.links.map((link, index) => (
            <LinkContainer key={index}>
              <LinkComponent data={link}></LinkComponent>
            </LinkContainer>
          ))}
        </Col>
        <Col xs="12" md="6" lg="4">
          <Title>{data.about?.title}</Title>
          <Text>{data.about?.text}</Text>
        </Col>
        <Col xs="12" md="6" lg="4">
          <Title>Contact</Title>
          <LinkContainer>
            <LinkComponent data={data.contact?.email}></LinkComponent>
          </LinkContainer>
          <LinkContainer>
            <LinkComponent data={data.contact?.website}></LinkComponent>
          </LinkContainer>
          <Title>Follow us on</Title>
        </Col>
      </Row>
    </Container>
  </BackgroundContainer>
);

export default FooterComponent;

interface Footer {
  links: Link[];
  about: {
    title: string;
    text: string;
  };
  contact: {
    email: Link;
    website: Link;
    socialmedia: {
      icon: string;
      href: string;
    }[];
  };
}

interface Props {
  data: Footer;
}
