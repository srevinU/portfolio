import axios, { AxiosError, AxiosResponse } from "axios";
import WebService from "./WebService";

export default class AuthService extends WebService {
  static async login(email: string, password: string) {
    console.log("login trigered");
    return this.axiosInstance
      .post(`${process.env.REACT_APP_BACKEND_SUB_NAME}/auth/login`, {
        email,
        password,
      })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((error: AxiosError) => {
        console.error(error);
        return error;
      });
  }

  static async logout(): Promise<void> {
    return axios.post(`${process.env.REACT_APP_BACKEND_SUB_NAME}/logout`);
  }

  static async isUserLoggedIn(): Promise<boolean> {
    this.axiosInstance.defaults.withCredentials = true;
    return this.axiosInstance
      .post(`${process.env.REACT_APP_BACKEND_SUB_NAME}/auth/isLogged`, {
        withCredentials: true,
      })
      .then((response: AxiosResponse) => {
        return response.data;
      })
      .catch((error: AxiosError) => {
        console.error(error);
        return false;
      });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user") as string);
  }
}
