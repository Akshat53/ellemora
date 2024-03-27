import { get, post, put, deleteRequest } from "../utils/api";

export const getProductList = async (params: object) => {
  const response = await get(`/products`, params);
  return response.data;
};
