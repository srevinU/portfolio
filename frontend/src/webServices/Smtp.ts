import axios, { AxiosResponse } from "axios";
import WebService from "./WebService";

export default class SmtpService extends WebService {
  static async sendEmail(
    from: string,
    message: string,
  ): Promise<AxiosResponse> {
    try {
      return await this.axiosInstance.post("/email/", {
        from_: from,
        message: message,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.status);
        console.error(error.response);
        throw error;
      } else {
        throw new Error(error as string);
      }
    }
  }
}
