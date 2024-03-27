import { get, post, put, deleteRequest } from "../utils/api";

export const loginUser = async (data: object) => {
  const response = await post(`/login`, data);
  return response.data;
};
