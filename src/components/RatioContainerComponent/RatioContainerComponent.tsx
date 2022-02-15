import React, { FC } from "react";
import styles from "./RatioContainerComponent.module.scss";

interface RatioContainerComponentProps {
  children: any;
  ratio: string;
}

const RatioContainerComponent: FC<RatioContainerComponentProps> = (props) => {
  const { ratio, children } = props;

  return (
    <div
      className={styles.RatioContainerComponent}
      style={{ paddingTop: ratio }}
      data-testid="RatioContainerComponent"
    >
      <div className={styles.innerDiv}>{children}</div>
    </div>
  );
};

export default RatioContainerComponent;
