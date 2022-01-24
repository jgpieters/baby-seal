import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import styled from "styled-components";

const Tile: any = styled.div`
  background-color: white;
  border: 1px #eee solid;
  width: 100%;
  margin-bottom: 30px;
  border-radius: 4px;
  box-shadow: 0px 0px 25px -6px #000000;
  cursor: pointer;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0px 5px 28px -3px #000000;
    transform: translateY(-5px);
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:active {
    box-shadow: 0px 0px 24px -6px #000000;
    transform: translateY(-2px);
    transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const TextWrapper: any = styled.div`
  padding: 10px;
`;

const Image: any = styled.img`
  width: 100%;
  border-radius: 3px 3px 0 0;
  border-bottom: 1px #eee solid;
`;

Image.defaultProps = (props: any) => ({
  src: props.image,
});

const Title: any = styled.h2``;

const Text: any = styled.p``;

const Date: any = styled.p``;

const TileComponent = ({ data }: Props) => (
  <Tile data-testid="tile-component">
    <Image src={data.image}></Image>
    <TextWrapper>
      <Title>{data.title}</Title>
      <Text>{data.text}</Text>
      <Date>{data.date}</Date>
    </TextWrapper>
  </Tile>
);

export default TileComponent;

interface Props {
  data: Tile;
}

export interface Tile {
  title: string;
  text: string;
  image: string;
  date: string;
}
