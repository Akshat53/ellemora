import Constants from "../constants/constants";
import Admin from "../views/Admin/Admin";
import FileUpload from "../views/Admin/ProductUploadeByExcel";
import Home from "../views/MobileScreens/Home/Home";

import Product from "../views/MobileScreens/Product";
import ProductList from "../views/MobileScreens/ProductList";
import Customization from "../views/MobileScreens/Customization/Customization";
import BuyNow from "../views/MobileScreens/BuyNow/BuyNow";

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
  {
    path: Constants.ROUTES.CUSTOMIZATION,
    Component: Customization,
    exact: true,
    title: Constants.HEADERS.CUSTOMIZATION,
  },
  {
    path: Constants.ROUTES.BUYNOW,
    Component: BuyNow,
    exact: true,
    title: Constants.HEADERS.BUYNOW,
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
{
  path: Constants.ROUTES.BUYNOW,
  Component: BuyNow,
  exact: true,
  title: Constants.HEADERS.BUYNOW,
},
];


export const unauthorizedMobileRoutes = [];

export const allRoutes = [...unauthorizedWebRoutes, authorizedWebRoutes];
