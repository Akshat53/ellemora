import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/MobileScreens/Home";
import ROUTES from "./routes/index";

import Footer from "./layout/Footer/Footer";
import Product from "./views/MobileScreens/Product";
import ProductList from "./views/MobileScreens/ProductList";
import Main from "./layout/Main";

import Header from "./layout/Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <Main>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.PRODUCT} element={<Product />} />
            <Route path={ROUTES.PRODUCTS} element={<ProductList />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
