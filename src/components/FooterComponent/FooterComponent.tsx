import React, { FC } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import LinkComponent from "../LinkComponent/LinkComponent";
import styles from "./FooterComponent.module.scss";
import { Footer } from "../../model/model";

interface FooterComponentProps {
  data: Footer;
}

const FooterComponent: FC<FooterComponentProps> = (props) => {
  const { links, about, contact } = props.data;
  return (
    <div className={styles.FooterComponent} data-testid="FooterComponent">
      <Container>
        <Row>
          <Col xs="12" md="6" lg="4">
            <h2>Menu</h2>
            {links?.map((link, index) => (
              <div className={styles.LinkComponent} key={index}>
                <LinkComponent data={link}></LinkComponent>
              </div>
            ))}
          </Col>
          <Col xs="12" md="6" lg="4">
            <h2>{about?.title}</h2>
            <p>{about?.text}</p>
          </Col>
          <Col xs="12" md="6" lg="4">
            <h2>Contact</h2>
            <div className={styles.linkContainer}>
              <LinkComponent data={contact?.email}></LinkComponent>
            </div>
            <div className={styles.linkContainer}>
              <LinkComponent data={contact?.website}></LinkComponent>
            </div>
            <h2>Follow us on</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
