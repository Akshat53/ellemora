import { updateObject } from "../../utils/store";
import * as actions from "../../actiontypes/actiontypes";
import { Action } from "../../interface/store.interface";
import { Category } from "../../interface/store.interface";

const initialState = {
  categories: [] as Category[],
};

const parseCategories = (data: any): Category[] => {
  if (!data || !Array.isArray(data.categoriesList)) {
    console.error(
      "Expected an object with categoriesList as an array, received:",
      data
    );
    return [];
  }

  return data.categoriesList.map((category: any) => ({
    _id: category._id,
    name: category.name,
    description: category.description,
    parentCategory: category.parentCategory,
    level: category.level,
    isActive: category.isActive,
    softDelete: category.softDelete,
    createdAt: category.createdAt,
    updatedAt: category.updatedAt,
    __v: category.__v,
  }));
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.GET_CATEGORIES_LIST:
      return updateObject(state, { categories: parseCategories(action.data) });

    default:
      return state;
  }
};

export default reducer;
