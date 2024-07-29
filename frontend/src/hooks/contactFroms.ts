import { useEffect, useRef, useState } from "react";
import { ContactInputsFormT } from "../utils/types/ContactForm";
import SmtpService from "../webServices/Smtp";
import { PopInT } from "../utils/types/PopIn";
import axios, { AxiosError, AxiosResponse } from "axios";

interface ContactFormsHooksT {
  formRef: React.RefObject<HTMLFormElement>;
  contactInputs: ContactInputsFormT;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  popIn: PopInT;
  loading: boolean;
  handleSubmit: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => Promise<void>;
}

const useContactFormsHooks = (): ContactFormsHooksT => {
  const formRef = useRef<HTMLFormElement>(null);

  const inputsForm: ContactInputsFormT = {
    name: "",
    email: "",
    message: "",
  };

  const [contactInputs, setContactInputs] =
    useState<ContactInputsFormT>(inputsForm);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setContactInputs({ ...contactInputs, [e.target.name]: e.target.value });
  };

  const clearContactInputs = (): void => {
    formRef.current?.reset();
  };

  const [popIn, setPopIn] = useState<PopInT>({
    active: false,
    message: "",
    statusCode: 200,
  });

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let timeOutId: NodeJS.Timeout | null = null;
    if (popIn.active) {
      timeOutId = setTimeout((): void => {
        setPopIn({
          active: false,
          message: "",
          statusCode: 200,
        });
      }, 5000);
      return (): void => {
        if (timeOutId) return clearTimeout(timeOutId);
      };
    }
  }, [popIn]);

  const isFormValid = (): boolean => {
    return (
      contactInputs.name !== "" &&
      contactInputs.email !== "" &&
      contactInputs.message !== ""
    );
  };

  const handlePopin = (result: AxiosResponse | AxiosError): void => {
    if (!axios.isAxiosError(result)) {
      setPopIn({
        active: true,
        message: result.data.message,
        statusCode: result.status,
      });
    } else {
      setPopIn({
        active: true,
        message: "Unable to send you email, please try later...",
        statusCode: 500,
      });
    }
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): Promise<void> => {
    if (isFormValid()) {
      e.preventDefault();
      setLoading(true);
      const result = await SmtpService.sendEmail(
        `${contactInputs.name} - ${contactInputs.email}`,
        contactInputs.message,
      );
      handlePopin(result);
      clearContactInputs();
      setLoading(false);
    }
  };

  return {
    formRef,
    contactInputs,
    handleChange,
    popIn,
    loading,
    handleSubmit,
  };
};

export default useContactFormsHooks;
