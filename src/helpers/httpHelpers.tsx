import axios from "axios";


export const authHttpRequest = (url:string, data:any, method: any, params={}) => {
  return axios.request<void, string>({
    url,
    method,
    data,
    params,
    headers: {
      Accept: "application/json, text/plain */*",
      "Content-Type": "application/json",
    },
  }).then((res:any ) => res);
};


export const makeHttpRequest = (url:string, data:any, method: any, params:any) => {
  let user = JSON.parse(sessionStorage.getItem("PEP_ADMIN_Token") || '{}');

  return axios.request<void, string>({
    url,
    data,
    method,
    params,
    headers: {
      Accept: "application/json, text/plain */*",
      Authorization: `Bearer ${user.token}`,
    },
  }).then((res:any ) => res);
};

