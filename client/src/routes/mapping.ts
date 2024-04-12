import Constants from "../constants/constants";
import Admin from "../views/Admin/Admin";
import FileUpload from "../views/Admin/ProductUploadeByExcel";
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
  {
    path: Constants.ROUTES.Admin,
    Component: Admin,
    exact: true,
    title: Constants.HEADERS.ADMIN,
  },
  {
    path: Constants.ROUTES.Upload,
    Component: FileUpload,
    exact: true,
    title: Constants.HEADERS.Upload,
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
  path: Constants.ROUTES.PRODUCTS,
  Component: ProductList,
  exact: true,
  title: Constants.HEADERS.PRODUCTS,
},
];

export const unauthorizedMobileRoutes = [];

export const allRoutes = [...unauthorizedWebRoutes, authorizedWebRoutes];
