import Constants from "../constants/constants";
import Home from "../views/MobileScreens/Home";
import Product from "../views/MobileScreens/Product";
import ProductList from "../views/MobileScreens/ProductList";

export const authorizedWebRoutes = [
  {
    path: Constants.ROUTES.HOME,
    Component: Home,
    exact: true,
    title: Constants.HEADERS.HOME,
  },
  {
    path: Constants.ROUTES.PRODUCT,
    Component: Product,
    exact: true,
    title: Constants.HEADERS.PRODUCT,
  },
  {
    path: Constants.ROUTES.PRODUCTS,
    Component: ProductList,
    exact: true,
    title: Constants.HEADERS.PRODUCTS,
  },
];

export const unauthorizedWebRoutes = [];

export const authorizedMobileRoutes = [
  {
    path: Constants.ROUTES.HOME,
    Component: Home,
    exact: true,
    title: Constants.HEADERS.HOME,
  },
  {
    path: Constants.ROUTES.PRODUCT,
    Component: Product,
    exact: true,
    title: Constants.HEADERS.PRODUCT,
  },
  {
    path: Constants.ROUTES.PRODUCTS,
    Component: ProductList,
    exact: true,
    title: Constants.HEADERS.PRODUCTS,
  },
];

export const unauthorizedMobileRoutes = [];

export const allRoutes = [...unauthorizedWebRoutes, authorizedWebRoutes];
