import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import LandingPage from "../../pages/LandingPage/LandingPage";
import VlogPage from "../../pages/VlogPage/VlogPage";
import DonatePage from "../../pages/DonatePage/DonatePage";
import ContactPage from "../../pages/ContactPage/ContactPage";
import BlogOverviewComponent from "../../features/BlogFeature/components/BlogOverviewComponent/BlogOverviewComponent";
import BlogArticleComponent from "../../features/BlogFeature/components/BlogArticleComponent/BlogArticleComponent";
import LoginPage from "../../pages/admin/loginPage/LoginPage";

interface MainRoutesProps {}

interface MainRoutesState {
  loggedIn: boolean;
}

class MainRoutes extends React.Component<MainRoutesProps, MainRoutesState> {
  render() {
    return (
      <div data-testid="MainRoutes">
        <NavBarComponent></NavBarComponent>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogOverviewComponent />} />
          <Route path="/blog/:id/*" element={<BlogArticleComponent />} />
          <Route path="/vlog" element={<VlogPage />} />
          <Route path="/vlog" element={<VlogPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <FooterComponent
          data={{
            links: [
              { href: "/vlog", target: "_self", text: "Vlog" },
              { href: "/blog", target: "_self", text: "Blog" },
              { href: "/article", target: "_self", text: "Artikelen" },
              { href: "/info", target: "_self", text: "Informatie" },
              { href: "/contact", target: "_self", text: "Contact" },
            ],
            about: {
              title: "Title",
              text: "lorem ipsum",
            },
            contact: {
              email: {
                href: "mailto: jorisentyrone@hotmail.com",
                target: "_self",
                text: "jorisentyrone@hotmail.com",
              },
              website: {
                href: "https://wwww.jorisentyrone.io",
                target: "_self",
                text: "https://wwww.jorisentyrone.io",
              },
              socialmedia: [],
            },
          }}
        ></FooterComponent>
      </div>
    );
  }
}

export default MainRoutes;
