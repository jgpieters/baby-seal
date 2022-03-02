import React from "react";
import styles from "./LoginPage.module.scss";

import AuthService from "../../../services/AuthService";
import LoginComponent from "../../../components/admin/LoginComponent/LoginComponent";

interface LoginPageProps {}

interface LoginPageState {
  loggedIn: boolean;
}

class LoginPage extends React.Component<LoginPageProps, LoginPageState> {
  private authService;

  constructor(props: any) {
    super(props);
    this.authService = new AuthService();
  }

  async login(username: string, password: string): Promise<any> {
    const loginResult = await this.authService.login({ username, password });

    const loggedIn =
      loginResult.token?.length != null && loginResult.token.length > 0;

    if (loggedIn) {
      window.history.pushState({}, "", "/admin/blog");
    }
  }

  render() {
    return (
      <div className={styles.LoginPage} data-testid="LoginPage">
        <LoginComponent
          onSubmit={(username: string, password: string) =>
            this.login(username, password)
          }
        ></LoginComponent>
      </div>
    );
  }
}

export default LoginPage;
