import React, { FC } from "react";
import styles from "./TilesComponent.module.scss";
import TileComponent, { Tile } from "../TileComponent/TileComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import MasonryComponent from "../MasonryComponent/MasonryComponent";

interface TilesComponentProps {
  data: {
    intro: {
      title: string;
      text: string;
    };
    tiles: Tile[];
  };
}

const TilesComponent: FC<TilesComponentProps> = (props) => {
  const { intro, tiles } = props.data;

  return (
    <React.Fragment>
      <Container className={styles.TilesComponent} data-testid="TilesComponent">
        <Row>
          <Col xs="12" sm="8" md="8" lg="6">
            <div className={styles.intro}>
              <h2>{intro.title}</h2>
              <p>{intro.text}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <MasonryComponent>
        {tiles.map((tileData, index) => (
          <TileComponent key={index} data={tileData}></TileComponent>
        ))}
      </MasonryComponent>
    </React.Fragment>
  );
};

export default TilesComponent;
