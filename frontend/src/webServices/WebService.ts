import axios, { AxiosInstance } from "axios";
import https from "https";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export default class WebService {
  public static readonly axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SMTP_API_URL,
    headers: {
      "Content-Type": process.env.CONTENT_TYPE,
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    },
    httpsAgent: httpsAgent,
  });
}
