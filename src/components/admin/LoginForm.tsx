import { useState } from "react";
import "../../style/components/loginForm.css";
import { AdminInputsFormT } from "../../utils/types/AdminForm";

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

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    if (isFormValid()) {
      e.preventDefault();
      console.log("Inputs values to send:", loginInputs);
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
