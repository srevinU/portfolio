import { useState } from "react";
import "../../style/components/loginForm.css";
import { AdminInputsFormT } from "../../utils/types/AdminForm";
import AuthService from "../../webServices/Auth";

function LoginForm(): JSX.Element {
  const inputsForm: AdminInputsFormT = {
    email: "",
    password: "",
  };

  const [loginInputs, setLoginInputs] = useState<AdminInputsFormT>(inputsForm);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setLoginInputs({ ...loginInputs, [e.target.name]: e.target.value });
  };

  const isFormValid = (): boolean => {
    return loginInputs.email !== "" && loginInputs.password !== "";
  };

  const login = async (email: string, password: string): Promise<void> => {
    try {
      await AuthService.login(email, password);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    if (isFormValid()) {
      e.preventDefault();
      login(loginInputs.email, loginInputs.password);
    }
  };

  return (
    <div className="login_content">
      <form className="login_form">
        <h2 className="login_title">Login</h2>
        <input
          className="input_form"
          type="email"
          id="email"
          name="email"
          data-testid="email"
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          className="input_form"
          type="password"
          id="password"
          name="password"
          data-testid="password"
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button
          className="button_form"
          type="submit"
          data-testid="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
