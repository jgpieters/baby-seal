import React, { FC } from "react";
import styles from "./SectionComponent.module.scss";

interface SectionComponentProps {
  children: any;
  color: string;
}

const SectionComponent: FC<SectionComponentProps> = (props) => {
  const { color, children } = props;

  return (
    <section>
      <div
        className={styles.SectionComponent}
        style={{ backgroundColor: color }}
        data-testid="SectionComponent"
      >
        {children}
      </div>
    </section>
  );
};

export default SectionComponent;
