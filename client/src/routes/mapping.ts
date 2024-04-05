import Constants from "../constants/constants";
import Home from "../views/MobileScreens/Home/Home";
import Product from "../views/MobileScreens/Product";
import ProductList from "../views/MobileScreens/ProductList";
import Customization from "../views/MobileScreens/Customization/Customization";

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
  {
    path: Constants.ROUTES.CUSTOMIZATION,
    Component: Customization,
    exact: true,
    title: Constants.HEADERS.CUSTOMIZATION,
  },
];

export const unauthorizedWebRoutes = [];

export const authorizedMobileRoutes = [  {
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
{
  path: Constants.ROUTES.CUSTOMIZATION,
  Component: Customization,
  exact: true,
  title: Constants.HEADERS.CUSTOMIZATION,
},
];

export const unauthorizedMobileRoutes = [];

export const allRoutes = [...unauthorizedWebRoutes, authorizedWebRoutes];
