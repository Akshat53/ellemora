import * as actions from "../../actiontypes/actiontypes";
import {
  getProductById,
  getProductList,
} from "../../services/products.service";

export const getProductListAction =
  (params: any, list: any) => async (dispatch: any) => {
    const response = await getProductList(params);
    dispatch({
      type: actions.GET_PRODUCTS_LIST,
      data: { response, list },
    });
    return response;
  };

export const selectProductAction = (id: string) => async (dispatch: any) => {
  dispatch({
    type: actions.SELECT_PRODUCT,
    data: { id },
  });
};

export const getProductByIdAction = (id: string) => async (dispatch: any) => {
  const response = await getProductById(id, {});
  dispatch({
    type: actions.GET_PRODUCT_DETAILS,
    data: response,
  });
};

export const setSortingFitlerAction = (args: any) => async (dispatch: any) => {
  console.log("updateing filter.... ");
  dispatch({
    type: actions.SET_SORTING_FILTER,
    data: {
      productList: [],
      sortBy: args.sortBy,
      orderBy: args.orderBy,
    },
  });
};
