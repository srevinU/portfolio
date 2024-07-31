import { AxiosError, AxiosResponse } from "axios";
import WebService from "./WebService";

export default class SmtpService extends WebService {
  static async sendEmail(
    from: string,
    message: string,
  ): Promise<AxiosResponse | AxiosError> {
    try {
      return await this.axiosInstance.post("/email/", {
        from_: from,
        message: message,
        instance: process.env.REACT_APP_INSTANCE,
      });
    } catch (error) {
      console.error(error);
      return error as AxiosError;
    }
  }
}
