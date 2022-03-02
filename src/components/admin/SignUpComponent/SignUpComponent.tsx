import React, { FC, useState } from "react";
import styles from "./SignupComponent.module.scss";
import { Form, Container, Col, Row, Button } from "react-bootstrap";

interface SignupComponentProps {
  onSubmit: (
    name: string,
    username: string,
    password: string,
    passwordConfirm: string
  ) => void;
}

const SignupComponent: FC<SignupComponentProps> = (props) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <Container className={styles.SignupComponent} data-testid="SignupComponent">
      <Row>
        <Col
          xs={12}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 4, offset: 4 }}
          xl={{ span: 2, offset: 5 }}
        >
          <h2>Sign up</h2>
          <Form.Control
            size="sm"
            type="text"
            value={name}
            placeholder="Name"
            className={styles.formInput}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            size="sm"
            type="text"
            value={username}
            placeholder="Username(email)"
            className={styles.formInput}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Control
            size="sm"
            type="text"
            value={password}
            placeholder="Password"
            className={styles.formInput}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Control
            size="sm"
            type="text"
            value={passwordConfirm}
            placeholder="Confirm password"
            className={styles.formInput}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <Button
            color="primary"
            onClick={() =>
              props.onSubmit(name, username, password, passwordConfirm)
            }
          >
            Sign up
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupComponent;
