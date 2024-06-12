import axios from "axios";

export default class AuthService {
  API_URL: string = "http://localhost:8000";

  async login(email: string, password: string) {
    return axios
      .post(`${this.API_URL}/login`, {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  async logout(): Promise<void> {
    return axios.post(`${this.API_URL}/logout`);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user") as string);
  }
}
