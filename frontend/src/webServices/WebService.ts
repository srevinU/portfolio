import axios, { AxiosInstance } from "axios";

export default class WebService {
  public static readonly axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_URL,
    withCredentials: false,
    headers: {
      // "Access-Control-Allow-Credentials": true,
      "Content-Type": process.env.REACT_APP_CONTENT_TYPE,
      Accept: process.env.REACT_APP_ACCEPT,
      "Access-Control-Allow-Origin":
        process.env.REACT_APP_ACCESS_CONTROL_ALLOW_ORIGIN,
      "Access-Control-Allow-Methods":
        process.env.REACT_APP_ACCESS_CONTROL_ALLOW_METHODS,
      "X-Requested-With": "XMLHttpRequest",
    },
  });
}
