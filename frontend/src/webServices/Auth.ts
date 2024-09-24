import axios, { AxiosError, AxiosResponse } from "axios";
import WebService from "./WebService";

export default class AuthService extends WebService {
  static async login(email: string, password: string) {
    return this.axiosInstance
      .post(`${process.env.REACT_APP_BACKEND_SUB_NAME}/auth/login`, {
        email,
        password,
      })
      .then((response: AxiosResponse) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response;
      })
      .catch((error: AxiosError) => {
        console.error(error);
        return error;
      });
  }

  async logout(): Promise<void> {
    return axios.post(`${process.env.REACT_APP_BACKEND_SUB_NAME}/logout`);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user") as string);
  }
}
