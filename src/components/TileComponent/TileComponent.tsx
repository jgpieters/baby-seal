import React, { FC } from "react";
import styles from "./TileComponent.module.scss";

interface TileComponentProps {
  data: Tile;
}

const TileComponent: FC<TileComponentProps> = (props) => {
  const { image, title, text, date } = props.data;

  return (
    <div className={styles.TileComponent} data-testid="TileComponent">
      <img src={image} alt=""></img>
      <div className={styles.textWrapper}>
        <h2>{title}</h2>
        <p>{text}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default TileComponent;
export interface Tile {
  title: string;
  text: string;
  image: string;
  date: string;
}
