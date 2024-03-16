import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import ROUTES from "./routes/index";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Product from "./views/Product";
import ProductList from "./views/ProductList";
import Main from "./layout/Main";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PRODUCT} element={<Product />} />
        <Route path={ROUTES.PRODUCTS} element={<ProductList />} />
      </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
