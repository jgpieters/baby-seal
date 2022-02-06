import React from "react";
import styled from "styled-components";
import ButtonComponent, {
  ButtonData,
} from "../ButtonComponent/ButtonComponent";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ReactPlayer from "react-player";
import RatioContainerComponent from "../RatioContainerComponent/RatioContainerComponent";

const Title: any = styled.h1``;
const Paragraph: any = styled.p``;
const Date: any = styled.div``;

const VideoSnippetComponent = ({ data }: Props) => (
  <Container>
    <Row data-testid="VideoSnippetComponent">
      <Col sm="12" md={{ span: 4, offset: 2 }}>
        <Title>{data.title}</Title>
        <Paragraph>{data.text}</Paragraph>
        {data.primaryButton ? (
          <ButtonComponent
            data={data.primaryButton}
            type="primary"
          ></ButtonComponent>
        ) : null}
        {data.date ? <Date>{data.date}</Date> : null}
        {data.secondaryButton ? (
          <ButtonComponent
            data={data.secondaryButton}
            type="secondary"
          ></ButtonComponent>
        ) : null}
      </Col>
      <Col sm="12" md={{ span: 4 }}>
        <RatioContainerComponent ratio="56.25%">
          <ReactPlayer url={data.video} width="auto" height={"100%"} />
        </RatioContainerComponent>
      </Col>
    </Row>
  </Container>
);

export default VideoSnippetComponent;

interface VideoSnippetData {
  title: string;
  text: string;
  date?: Date;
  video: string;
  primaryButton?: ButtonData;
  secondaryButton?: ButtonData;
}

interface Props {
  data: VideoSnippetData;
}
