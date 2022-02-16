import React, { FC } from "react";
import styles from "./TilesComponent.module.scss";
import TileComponent, { Tile } from "../TileComponent/TileComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const getTile: any = (tiles: Tile[], index: number) => {
  if (index + 1 <= tiles.length) {
    return <TileComponent data={tiles[index]}></TileComponent>;
  }
  return null;
};

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
    <Container className={styles.TilesComponent} data-testid="TilesComponent">
      <Row>
        <Col xs="12" sm="6" md="3">
          {getTile(tiles, 0)}
        </Col>
        <Col xs="12" sm="6" md="3" style={{ marginTop: "-200px" }}>
          <div className={styles.introTile}>
            <h2>{intro.title}</h2>
            <p>{intro.text}</p>
          </div>
          {getTile(tiles, 1)}
        </Col>
        <Col xs="12" sm="6" md="3" style={{ marginTop: "-100px" }}>
          {getTile(tiles, 2)}
          {getTile(tiles, 3)}
        </Col>
        <Col xs="12" sm="6" md="3" style={{ marginTop: "70px" }}>
          {getTile(tiles, 4)}
        </Col>
      </Row>
    </Container>
  );
};

export default TilesComponent;
