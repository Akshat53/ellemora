import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import ROUTES from "./routes/index";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Product from "./views/Product";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PRODUCT} element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
