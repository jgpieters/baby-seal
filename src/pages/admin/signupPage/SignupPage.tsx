import React from "react";

import styles from "./SignupPage.module.scss";

import AuthService from "../../../services/AuthService";
import SignupComponent from "../../../components/admin/SignupComponent/SignupComponent";

interface SignupPageProps {}

interface SignupPageState {
  loggedIn: boolean;
}

class SignupPage extends React.Component<SignupPageProps, SignupPageState> {
  private authService;

  constructor(props: any) {
    super(props);
    this.authService = new AuthService();
  }

  async signup(
    name: string,
    username: string,
    password: string,
    passwordConfirm: string
  ): Promise<any> {
    const signupResult = await this.authService.signup({
      name,
      username,
      password,
      passwordConfirm,
    });
    this.setState({ loggedIn: signupResult.token });
  }

  render() {
    return (
      <div className={styles.SignupPage} data-testid="SignupPage">
        <SignupComponent
          onSubmit={(
            name: string,
            username: string,
            password: string,
            passwordConfirm: string
          ) => this.signup(name, username, password, passwordConfirm)}
        ></SignupComponent>
      </div>
    );
  }
}

export default SignupPage;
