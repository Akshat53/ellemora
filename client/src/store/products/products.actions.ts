import * as actions from "../../actiontypes/actiontypes";
import {
  getProductById,
  getProductList,
} from "../../services/products.service";

export const getProductListAction = (params:any) => async (dispatch:any) => {
  const response = await getProductList(params);
  dispatch({
    type: actions.GET_PRODUCTS_LIST,
    data: response,
  });
  return response;
};

export const selectProductAction = (id: string) => async (dispatch:any) => {
  dispatch({
    type: actions.SELECT_PRODUCT,
    data: id,
  });
};

export const getProductByIdAction = (id: string) => async (dispatch:any) => {
  const response = await getProductById(id, {});
  dispatch({
    type: actions.GET_PRODUCT_DETAILS,
    data: response,
  });
};
