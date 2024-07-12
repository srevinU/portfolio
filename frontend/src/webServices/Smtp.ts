import axios from "axios";
import WebService from "./WebService";

export default class SmtpService extends WebService {
  static async sendEmail(from: string, message: string) {
    return await axios.post(
      `${process.env.REACT_APP_SMTP_API_URL}/email/`,
      {
        from_: from,
        message: message,
      },
      this.config
    );
  }
}
