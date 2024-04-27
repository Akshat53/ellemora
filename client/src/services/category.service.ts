import { get, post, put, deleteRequest } from "../utils/api";

export const getCategoriesList = async (params: object) => {
  const response = await get(`/categories`, params);
  return response.data;
};
