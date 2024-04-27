import { getCategoriesList } from "../../services/category.service";
import * as actions from "../../actiontypes/actiontypes";

// This action now accepts `params` which could include filtering options
export const getCategoriesListAction = (params: any) => async (dispatch: any) => {
  try {
    // Passing `params` to the service function; ensure the service handles them correctly
    const response = await getCategoriesList(params);
    dispatch({
      type: actions.GET_CATEGORIES_LIST,
      data: response,
    });
    return response;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    // Optionally handle the error by dispatching a failure action or returning it
    // dispatch({ type: actions.GET_CATEGORIES_LIST_FAILED, error: error });
    return null;
  }
};
