import React, { FC } from "react";
import styles from "./BlogIntroComponent.module.scss";

interface ArticleComponentProps {
  children: any;
  color: string;
}

const ArticleComponent: FC<ArticleComponentProps> = (props) => {
  const { color, children } = props;

  return (
    <article className={styles.ArticleComponent}>
      <div
        className={styles.backgroundContainer}
        style={{ backgroundColor: color }}
        color={color}
        data-testid="ArticleComponent"
      >
        {children}
      </div>
    </article>
  );
};

export default ArticleComponent;
