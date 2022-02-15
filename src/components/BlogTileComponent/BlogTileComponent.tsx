import React, { FC } from "react";
import { Blog } from "../../model/model";
import { textEllipsis } from "../../utils/helper/TextHelper";
import { useNavigate } from "react-router-dom";
import styles from "./BlogTileComponent.module.scss";

interface BlogTileComponentProps {
  data: Blog;
  key?: number;
  href?: string;
}

const BlogTileComponent: FC<BlogTileComponentProps> = (props) => {
  const { title, text, date } = props.data;

  const navigation = useNavigate();

  const navigate = (href?: string) => {
    if (href) navigation(href);
  };

  return (
    <div
      className={styles.BlogTileComponent}
      data-testid="BlogTileComponent"
      onClick={() => navigate(props.href)}
    >
      <img src={props.data.image} alt={""} className={styles.image}></img>
      <div className={styles.textWrapper}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{textEllipsis(text, 200)}</div>
        <div className={styles.date}>{date.toString()}</div>
      </div>
    </div>
  );
};

export default BlogTileComponent;
