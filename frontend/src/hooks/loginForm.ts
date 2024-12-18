import { useState } from "react";
import { LoginInputFormT } from "../utils/types/LoginInputForm";
import AuthService from "../webServices/Auth";
import { AxiosError, AxiosResponse } from "axios";

interface LoginFormHooksI {
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  loading: boolean;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const useLoginFormHooks = (handlePopin: Function): LoginFormHooksI => {
  const inputsForm: LoginInputFormT = {
    email: "",
    password: "",
  };

  const [loginInputs, setLoginInputs] = useState<LoginInputFormT>(inputsForm);

  const [loading, setLoading] = useState<boolean>(false);

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

  const redirectAdmin = (): void => {
    window.location.href = "/admin";
  };

  const login = async (
    email: string,
    password: string,
  ): Promise<AxiosResponse | AxiosError> => {
    try {
      const response: AxiosResponse<any, any> | AxiosError<unknown, any> =
        await AuthService.login(email, password);
      if ((response as AxiosResponse).status === 201) {
        redirectAdmin();
        console.log("Login success");
      } else {
        console.error("Login error");
      }
      return response;
    } catch (error: any) {
      console.error("Login failed:", error);
      return error as AxiosError;
    }
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): Promise<void> => {
    if (isFormValid()) {
      e.preventDefault();
      setLoading(true);
      const result: AxiosResponse<any, any> | AxiosError<unknown, any> =
        await login(loginInputs.email, loginInputs.password);
      handlePopin(result);
      setLoading(false);
    }
  };

  return {
    handleChange,
    loading,
    handleSubmit,
  };
};

export default useLoginFormHooks;
