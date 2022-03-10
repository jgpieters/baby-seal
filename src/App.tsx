import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes/MainRoutes";
import AdminRoutes from "./routes/AdminRoutes/AdminRoutes";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<MainRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
