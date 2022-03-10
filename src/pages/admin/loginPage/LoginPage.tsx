import React from "react";
import styles from "./LoginPage.module.scss";
import LoginComponent from "../../../components/admin/LoginComponent/LoginComponent";

interface LoginPageProps {}

interface LoginPageState {
  loggedIn: boolean;
}
class LoginPage extends React.Component<LoginPageProps, LoginPageState> {
  render() {
    return (
      <div className={styles.LoginPage} data-testid="LoginPage">
        <div className={styles.loginComponentWrapper}>
          <LoginComponent loginRoute="/admin/blog"></LoginComponent>
        </div>
      </div>
    );
  }
}

export default LoginPage;
