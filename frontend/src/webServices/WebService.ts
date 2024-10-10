import axios, { AxiosInstance } from "axios";

export default class WebService {
  public static readonly axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_URL,
    withCredentials: false,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
  });
}
