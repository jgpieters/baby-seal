import React, { FC } from "react";
import styles from "./IntroComponent.module.scss";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "../../model/model";

interface IntroCompontentProps {
  data: IntroData;
}

const IntroComponent: FC<IntroCompontentProps> = (props) => {
  const { title, text, signature, primaryButton, secondaryButton } = props.data;

  return (
    <Container className={styles.IntroCompontent} data-testid="IntroComponent">
      <Row>
        <Col lg={{ span: 5, offset: 1 }}>
          <div className={styles.box}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.paragraph}>{text}</p>
            <div className={styles.signature}>{signature}</div>
            <ButtonComponent
              data={primaryButton}
              type="primary"
            ></ButtonComponent>
            {secondaryButton ? (
              <ButtonComponent
                data={secondaryButton}
                type="secondary"
              ></ButtonComponent>
            ) : null}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default IntroComponent;
interface IntroData {
  title: string;
  text: string;
  signature?: string;
  primaryButton: Link;
  secondaryButton?: Link;
}
