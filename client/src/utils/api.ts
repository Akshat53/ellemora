// api.ts
import axios from "axios";
import _ from "lodash";
import Constants from "../constants/constants";

const API_URL = Constants.API_URL;

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

export const post = (path: string, body = {}, params = {}) =>
  apiService.post(url(path, params), body);

export const put = (path: string, body = {}, params = {}) =>
  apiService.put(url(path, params), body);

export const deleteRequest = (path: string, params = {}) =>
  apiService.delete(url(path, params));

apiService.interceptors.request.use((request) => {
  // Optionally modify request here
  return request;
});

apiService.interceptors.response.use(
  response => response,
  error => {
    console.error("Error in API", error);
    return Promise.reject(error);
  }
);
