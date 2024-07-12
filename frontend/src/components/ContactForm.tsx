import { useEffect, useRef, useState } from "react";
import { LanguageT } from "../utils/types/general";
import { ContactsFormT, ContactInputsFormT } from "../utils/types/ContactForm";
import "../style/components/ContactForm.css";
import SmtpService from "../webServices/Smtp";
import Popin from "./Popin";
import { AxiosResponse } from "axios";
import { PopInT } from "../utils/types/PopIn";

function ContactForm({
  contactForm,
  language,
  isMobile,
}: {
  contactForm: ContactsFormT;
  language: LanguageT;
  isMobile: boolean;
}): JSX.Element {

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
  }

  const [popIn, setPopIn] = useState<PopInT>({
    active: false,
    message: '',
    statusCode: 200,
  })

  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    let timeOutId: NodeJS.Timeout | null = null;
    if (popIn.active) {
      timeOutId = setTimeout((): void => {
        setPopIn({
          active: false,
          message: '',
          statusCode: 200
        });
      }, 5000);  
    }
    return (): void => {
      if (timeOutId) return clearTimeout(timeOutId);
    };

  }, [popIn]);

  const handlePopin = (result: AxiosResponse): void => {
    setPopIn({
      active: true,
      message: result.data.message,
      statusCode: result.status
    });
  }

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
      setLoading(true)
      const result = await SmtpService.sendEmail(`${contactInputs.name} - ${contactInputs.email}`, contactInputs.message)
      handlePopin(result);
      clearContactInputs();
      setLoading(false);
    }
  };

  return (
    <div className="contactForm">
      <form ref={formRef} className="bodyForm" style={{ width: isMobile ? "75%" : "25%" }}>
        <input
          className="input_form"
          type="text"
          id="name"
          name="name"
          data-testid="name"
          onChange={handleChange}
          placeholder={contactForm[language].name}
          required
          disabled={loading}
        />
        <input
          className="input_form"
          type="email"
          id="email"
          name="email"
          data-testid="email"
          onChange={handleChange}
          placeholder={contactForm[language].email}
          required
          disabled={loading}
        />
        <textarea
          className="input_form message"
          id="message"
          name="message"
          data-testid="message"
          onChange={handleChange}
          placeholder={contactForm[language].message_placeholder}
          required
          disabled={loading}
        ></textarea>
        <button type="submit" data-testid="submit" onClick={handleSubmit} disabled={loading}>
          {contactForm[language].submit}
        </button>
      </form>
      <Popin popInData={popIn} isMobile={isMobile}/>
    </div>
  );
}

export default ContactForm;
