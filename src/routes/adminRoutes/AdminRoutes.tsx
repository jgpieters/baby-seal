import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../../pages/admin/loginPage/LoginPage";
import SignupPage from "../../pages/admin/signupPage/SignupPage";
import BlogPage from "../../pages/admin/blogPage/BlogPage";
import VlogPage from "../../pages/admin/vlogPage/VlogPage";
import PrivateRoute from "../PrivateRouteComponent/PrivateRouteComponent";
import AdminMenuComponent from "../../components/admin/AdminMenuComponent/AdminMenuComponent";
import SectionPage from "../../pages/admin/sectionPage/SectionPage";

interface AdminRoutesProps {}

interface AdminRoutesState {}

class AdminRoutes extends React.Component<AdminRoutesProps, AdminRoutesState> {
  render() {
    return (
      <React.Fragment>
        <AdminMenuComponent></AdminMenuComponent>
        <Routes data-testid="AdminRoutes">
          <Route
            path="/signup"
            element={
              <PrivateRoute>
                <SignupPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/blog"
            element={
              <PrivateRoute>
                <BlogPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/vlog"
            element={
              <PrivateRoute>
                <VlogPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/section"
            element={
              <PrivateRoute>
                <SectionPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </React.Fragment>
    );
  }
}

export default AdminRoutes;
