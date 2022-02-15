import React, { FC } from "react";
import styles from "./BlogIntroComponent.module.scss";
import { Blog } from "../../model/model";

interface BlogIntroProps {
  data: Blog;
}

const BlogIntro: FC<BlogIntroProps> = (props) => {
  const { title, text, image, date, author } = props.data;

  return (
    <div className={styles.BlogIntroComponent} data-testid="BlogIntroComponent">
      {title ? <h1 className={styles.title}>{title}</h1> : null}
      {text ? <p className={styles.text}>{text}</p> : null}
      <img src={image} alt={""}></img>
    </div>
  );
};

export default BlogIntro;
