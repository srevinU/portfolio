import axios, { AxiosInstance } from "axios";

export default class WebService {
  public static readonly axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SMTP_API_URL,
    withCredentials: false,
    headers: {
      "Content-Type": process.env.CONTENT_TYPE,
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    },
  });
}
