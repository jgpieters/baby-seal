import React from "react";
import AuthService from "../../services/AuthService";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: any) => {
  const isLoggedIn = new AuthService().isLoggedIn();
  console.log("isLoggedIn", isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoute;
