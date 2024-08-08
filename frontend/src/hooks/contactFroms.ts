import { useRef, useState } from "react";
import { ContactInputsFormT } from "../utils/types/ContactForm";
import SmtpService from "../webServices/Smtp";

interface ContactFormsHooksI {
  formRef: React.RefObject<HTMLFormElement>;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  loading: boolean;
  handleSubmit: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => Promise<void>;
}

const useContactFormsHooks = (handlePopin: Function): ContactFormsHooksI => {
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

  const [loading, setLoading] = useState<boolean>(false);

  const isFormValid = (): boolean => {
    return (
      contactInputs.name !== "" &&
      contactInputs.email !== "" &&
      contactInputs.message !== ""
    );
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
    handleChange,
    loading,
    handleSubmit,
  };
};

export default useContactFormsHooks;
