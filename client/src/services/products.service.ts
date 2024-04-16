import { get, post, put, deleteRequest } from "../utils/api";

export const getProductList = async (params: object) => {
  const response = await get(`/products`, params);
  return response.data;
};

export const postProduct = async (data: object) => {
  const response = await post(`/products`, data);
  return response.data;
};

export const getProductById = async (id: string, params: object) => {
  const response = await get(`/products/${id}`, params);
  return response.data;
};
