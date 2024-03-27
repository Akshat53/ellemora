import * as actions from "../../actiontypes/actiontypes";
import { Action } from "../../interface/store.interface";
import { updateObject } from "../../utils/store";

const initialState = {
  productsList: [],
  start: 0,
  limit: 10,
  orderBy: 1,
  sortBy: "createdAt",
  selectedProduct: null,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS_LIST:
      return updateObject(state, action.data);
    case actions.SELECT_PRODUCT:
      return updateObject(state, action.data);
    default:
      return state;
  }
};

export default reducer;
