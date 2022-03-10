import React, { FC, useState } from "react";
import styles from "./LoginComponent.module.scss";
import { Form, Container, Col, Row, Button } from "react-bootstrap";
import AuthService from "../../../services/AuthService";
import { useNavigate } from "react-router-dom";

interface LoginComponentProps {
  loginRoute: string;
}

const LoginComponent: FC<LoginComponentProps> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authService = new AuthService();
  const navigation = useNavigate();

  const login = async (username: string, password: string) => {
    const loginResult = await authService.login({ username, password });

    const loggedIn =
      loginResult.token?.length != null && loginResult.token.length > 0;

    if (loggedIn) {
      navigation(props.loginRoute);
    }
  };

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
            value={username}
            placeholder="Username"
            className={styles.formInput}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Form.Control
            size="sm"
            type="password"
            value={password}
            placeholder="Password"
            className={styles.formInput}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button color="primary" onClick={() => login(username, password)}>
            Log in
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginComponent;
