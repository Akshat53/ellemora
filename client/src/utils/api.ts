import axios from "axios";
import _ from "lodash";
import Constants from "../constants/constants";

let API_URL = Constants.API_URL

const url = (path: string, params: any) => {
  const sections = path.split(":");
  const sectionsWithParams = sections.map((section) =>
    _.startsWith(section, "/") ? section : params[section]
  );
  const pathWithParams = sectionsWithParams.join("");
  return API_URL + pathWithParams;
};

const apiService = axios.create({});

export const get = (path: string, params = {}) =>
  apiService.get(url(path, params), { params });

export const post = (path: string, params = {}) =>
  apiService.post(url(path, params), params);

export const put = (path: string, params = {}) =>
  apiService.put(url(path, params), params);

export const deleteRequest = (path: string, params = {}) =>
  apiService.delete(url(path, params), { params });

apiService.interceptors.request.use((request) => {
  return request;
});

apiService.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Manage ERROR here
    console.log(error, "Error in API");
    return Promise.reject(error);
  }
);