import React from "react";
import styled from "styled-components";
import TileComponent, { Tile } from "../TileComponent/TileComponent";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const IntroTile: any = styled.div`
  border: 1px solid #fff;
  background-color: white;
  border: 1px #ccc solid;
  width: 100%;
  margin-bottom: 30px;
  padding: 20px;
`;

const getTile: any = (tiles: Tile[], index: number) => {
  if (index + 1 <= tiles.length) {
    return <TileComponent data={tiles[index]}></TileComponent>;
  }
  return null;
};

const TilesComponent = ({ data }: Props) => {
  const tiles = data.tiles;

  return (
    <Container>
      <Row>
        <Col xs="12" sm="6" md="3">
          {getTile(tiles, 0)}
        </Col>
        <Col xs="12" sm="6" md="3" style={{ marginTop: "-200px" }}>
          <IntroTile>
            <h2>{data.intro.title}</h2>
            <p>{data.intro.text}</p>
          </IntroTile>
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

interface Props {
  data: {
    intro: {
      title: string;
      text: string;
    };
    tiles: Tile[];
  };
}
