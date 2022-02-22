import React, { FC } from "react";
import styles from "./MasonryComponent.module.scss";
import Masonry from "react-masonry-component";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

type MasonryComponentProps = {
  children: React.ReactNode[];
};

const masonryOptions = {
  itemSelector: ".masonry-element",
  transitionDuration: 400,
};

const MasonryComponent: FC<MasonryComponentProps> = (props) => {
  const { children } = props;
  return (
    <Container
      className={styles.MasonryComponent}
      data-testid="MasonryComponent"
    >
      <Row>
        <Col>
          <Masonry
            className={"masonry-gallery"}
            elementType={"ul"}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
          >
            {children &&
              children.map((tile: any, index) => (
                <li
                  className={styles.masonryElement + " masonry-element"}
                  key={index}
                >
                  {tile}
                </li>
              ))}
          </Masonry>
        </Col>
      </Row>
    </Container>
  );
};

export default MasonryComponent;
