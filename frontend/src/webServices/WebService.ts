import { AxiosRequestConfig } from "axios";

export default class WebService {
  public static readonly config: AxiosRequestConfig = {
    headers: {
      "Content-Type": process.env.CONTENT_TYPE,
      "Access-Control-Allow-Origin": process.env.ACESS_CONTROL_ALLOW_ORIGIN,
      "Access-Control-Allow-Methods": process.env.ACCESS_CONTROL_ALLOW_METHODS,
      "Access-Control-Allow-Credentials":
        process.env.ACCESS_CONTROL_ALLOW_CREDENTIALS,
    },
  };
}
