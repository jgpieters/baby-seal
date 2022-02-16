import React, { FC } from "react";
import styles from "./VideoSnippetComponent.module.scss";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Link } from "../../model/model";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ReactPlayer from "react-player";
import RatioContainerComponent from "../RatioContainerComponent/RatioContainerComponent";

interface VideoSnippetComponentProps {
  data: VideoSnippetData;
}

const VideoSnippetComponent: FC<VideoSnippetComponentProps> = (props) => {
  const { title, text, date, video, primaryButton, secondaryButton } =
    props.data;

  return (
    <Container className={styles.VideoSnippetComponent}>
      <Row data-testid="VideoSnippetComponent">
        <Col sm="12" md={{ span: 4, offset: 2 }}>
          <h1>{title}</h1>
          <p>{text}</p>
          {primaryButton ? (
            <ButtonComponent
              data={primaryButton}
              type="primary"
            ></ButtonComponent>
          ) : null}
          {date ? <div>{date}</div> : null}
          {secondaryButton ? (
            <ButtonComponent
              data={secondaryButton}
              type="secondary"
            ></ButtonComponent>
          ) : null}
        </Col>
        <Col sm="12" md={{ span: 4 }}>
          <RatioContainerComponent ratio="56.25%">
            <ReactPlayer url={video} width="auto" height={"100%"} />
          </RatioContainerComponent>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoSnippetComponent;

interface VideoSnippetData {
  title: string;
  text: string;
  date?: Date;
  video: string;
  primaryButton?: Link;
  secondaryButton?: Link;
}
