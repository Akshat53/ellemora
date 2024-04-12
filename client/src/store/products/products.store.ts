import * as actions from "../../actiontypes/actiontypes";
import { Action } from "../../interface/store.interface";
import { updateObject } from "../../utils/store";

const initialState = {
  productsList: [],
  start: 0,
  limit: 10,
  page: 1,
  orderBy: 1,
  sortBy: "createdAt",
  selectedProduct: null,
};

const parseList = (data) => {
  let newData = {
    productsList: data.productsList.map((product: any) => ({
      id: product._id,
      title: product.name,
      discount: `${product.discount}% off`, // Assuming discount is a percentage
      description: product.description,
      discountedPrice:
        product.price - ((product.price * product.discount) / 100).toFixed(2),
      originalPrice: product.price.toFixed(2),
      img: product.media.map((mediaItem) => mediaItem.url),
    })),
    limit: data.limit,
    page: data.page,
    start: data.start,
  };
  return newData;
};

const selectProduct = (state, id) => {
  let selectedProduct = null;

  console.log(state.productsList, state.productsList.filter((item) => item.id == id), id)
  selectedProduct = state.productsList.filter((item) => item.id == id)[0];
  if (selectedProduct) {
    return { selectedProduct };
  } else return {};
};
const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS_LIST:
      return updateObject(state, parseList(action.data));
    case actions.SELECT_PRODUCT:
      return updateObject(state, selectProduct(state, action.data));
    default:
      return state;
  }
};

export default reducer;
