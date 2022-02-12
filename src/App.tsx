import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import LandingPage from "./pages/LandingPage/LandingPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import VlogPage from "./pages/VlogPage/VlogPage";
import DonatePage from "./pages/DonatePage/DonatePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AdminPage from "./pages/adminPage/AdminPage";
import BlogOverviewComponent from "./features/BlogFeature/components/BlogOverviewComponent/BlogOverviewComponent";
import BlogArticleComponent from "./features/BlogFeature/components/BlogArticleComponent/BlogArticleComponent";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarComponent></NavBarComponent>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogOverviewComponent />} />
          <Route path="/blog/:id/*" element={<BlogArticleComponent />} />
          <Route path="/vlog" element={<VlogPage />} />
          <Route path="/vlog" element={<VlogPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
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
      </BrowserRouter>
    </div>
  );
};

export default App;
