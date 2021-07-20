import { authHttpRequest, makeHttpRequest } from "../../helpers/httpHelpers";
import baseUrl from "../../config/baseUrl";

export const makePostRequest = (url: string, data={}, params={}) =>
  makeHttpRequest(`${baseUrl}${url}`, data, "POST", params || {});

export const makeGetRequest = (url:string, params={}) =>
  authHttpRequest(`${baseUrl}${url}`, {}, "GET", params || {});

export const makePutRequest = (url:string, data ={}) =>
  makeHttpRequest(`${baseUrl}${url}`, data, "PUT", {});

export const makeDeleteRequest = (url:string, params={}) =>
  makeHttpRequest(`${baseUrl}${url}`, {}, "DELETE", params || {});
