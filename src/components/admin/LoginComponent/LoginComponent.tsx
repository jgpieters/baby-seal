import React, { FC, useState } from "react";
import styles from "./LoginComponent.module.scss";

interface LoginComponentProps {
  onSubmit: (username: string, password: string) => void;
}

const LoginComponent: FC<LoginComponentProps> = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.LoginComponent} data-testid="LoginComponent">
      <input
        type="text"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      ></input>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={() => props.onSubmit(login, password)}>Submit</button>
    </div>
  );
};

export default LoginComponent;
