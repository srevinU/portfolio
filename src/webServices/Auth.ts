export default class AuthService {
  API_URL: string = "http://localhost:8000";

  async login(email: string, password: string) {
    const response = await fetch(`${this.API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return await response.json();
  }
}
