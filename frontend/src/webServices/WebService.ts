import { AxiosRequestConfig } from "axios";

export default class WebService {
  public static readonly config: AxiosRequestConfig = {
    headers: {
      "Content-Type": process.env.CONTENT_TYPE,
    },
  };
}
