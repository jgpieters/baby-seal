import React, { FC, useState } from "react";
import { User } from "../../../model/model";
import styles from "./SignUpComponent.module.scss";

interface SignUpComponentProps {
  onSubmit: (user: User) => void;
}

const SignUpComponent: FC<SignUpComponentProps> = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <div className={styles.LoginComponent} data-testid="LoginComponent">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <input
        type="password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      ></input>
      <button
        onClick={() =>
          props.onSubmit({ name, email, password, passwordConfirm })
        }
      >
        Submit
      </button>
    </div>
  );
};

export default SignUpComponent;
