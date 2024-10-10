import axios, { AxiosInstance } from "axios";

export default class WebService {
  public static readonly axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
