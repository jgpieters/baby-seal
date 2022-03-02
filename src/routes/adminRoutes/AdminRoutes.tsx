import React from "react";
import { Routes, Route } from "react-router-dom";

import styles from "./AdminRoutes.module.scss";
import LoginPage from "../../pages/admin/loginPage/LoginPage";
import SignupPage from "../../pages/admin/signupPage/SignupPage";
import BlogPage from "../../pages/admin/blogPage/BlogPage";

interface AdminRoutesProps {}

interface AdminRoutesState {}

class AdminRoutes extends React.Component<AdminRoutesProps, AdminRoutesState> {
  render() {
    return (
      <div className={styles.AdminRoutes} data-testid="AdminRoutes">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/admin/blog" element={<LoginPage />} />
        </Routes>
      </div>
    );
  }
}

export default AdminRoutes;
