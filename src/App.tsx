import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import LandingPage from "./pages/LandingPage/LandingPage";
import BlogPage from "./pages/BlogPage/BlogPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import VlogPage from "./pages/VlogPage/VlogPage.lazy";
import DonatePage from "./pages/DonatePage/DonatePage";
import ContactPage from "./pages/ContactPage/ContactPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarComponent></NavBarComponent>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/vlog" element={<VlogPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/contact" element={<ContactPage />} />
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
