import * as actions from "../../actiontypes/actiontypes";
import { getProductList } from "../../services/products.service";

export const getProductListAction = (params) => async (dispatch) => {
  const response = await getProductList(params);
  dispatch({
    type: actions.GET_PRODUCTS_LIST,
    data: response,
  });
  return response;
};

export const selectProductAction = (id:string) => async (dispatch) => {
  dispatch({
    type: actions.SELECT_PRODUCT,
    data: id,
  });
}