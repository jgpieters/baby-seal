import React, { FC, useState } from "react";
import styles from "./LoginComponent.module.scss";
import { Form, Container, Col, Row, Button } from "react-bootstrap";

interface LoginComponentProps {
  onSubmit: (username: string, password: string) => void;
}

const LoginComponent: FC<LoginComponentProps> = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container className={styles.LoginComponent} data-testid="LoginComponent">
      <Row>
        <Col
          xs={12}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 4, offset: 4 }}
          xl={{ span: 2, offset: 5 }}
        >
          <h2>Login</h2>
          <Form.Control
            size="sm"
            type="text"
            value={login}
            placeholder="Username"
            className={styles.formInput}
            onChange={(e) => setLogin(e.target.value)}
          />

          <Form.Control
            size="sm"
            type="password"
            value={password}
            placeholder="Password"
            className={styles.formInput}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            color="primary"
            onClick={() => props.onSubmit(login, password)}
          >
            Log in
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginComponent;
