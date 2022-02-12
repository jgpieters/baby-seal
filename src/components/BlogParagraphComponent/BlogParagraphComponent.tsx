import React, { FC } from "react";
import styles from "./BlogParagraphComponent.module.scss";
import { BlogParagraph } from "../../model/model";

interface BlogParagraphProps {
  data: BlogParagraph;
}

const BlogParagraphComponent: FC<BlogParagraphProps> = (props) => {
  const { title, text, quote, image } = props.data;

  return (
    <div
      className={styles.BlogParagraphComponent}
      data-testid="BlogParagraphComponent"
    >
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      {text ? <p className={styles.text}>{text}</p> : null}
      {quote ? <div className={styles.quote}>“{quote}”</div> : null}
      {image ? <img src={image} alt={""} className={styles.image}></img> : null}
    </div>
  );
};

export default BlogParagraphComponent;
