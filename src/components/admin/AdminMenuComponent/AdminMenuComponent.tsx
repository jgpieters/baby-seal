import React, { FC } from "react";
import styles from "./AdminMenuComponent.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

interface AdminMenuComponentProps {}

const AdminMenuComponent: FC<AdminMenuComponentProps> = () => (
  <Container
    className={styles.AdminMenuComponent}
    data-testid="AdminMenuComponent"
  >
    <Row>
      <Col xs="3" sm="2">
        <Link to="/admin/blog">Blog</Link>
      </Col>
      <Col xs="3" sm="2">
        <Link to="/admin/vlog">Vlog</Link>
      </Col>
      <Col xs="3" sm="2">
        <Link to="/admin/section">Section</Link>
      </Col>
    </Row>
  </Container>
);

export default AdminMenuComponent;
