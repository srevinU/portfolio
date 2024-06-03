import { useContext, useState } from "react";
import { ContryContext } from "../App";
import { LanguageT } from "../utils/types/general";
import { ContactInputsFormT } from "../utils/types/ContactForm";
import contactFrom from "../utils/data/contactForm";
import "../style/components/ContactForm.css";

function ContactForm(): JSX.Element {
  const language: LanguageT = useContext(ContryContext).language;

  const inputsForm: ContactInputsFormT = {
    name: "",
    email: "",
    message: "",
  };

  const [constactInputs, setContactInputes] =
    useState<ContactInputsFormT>(inputsForm);

  const handleChangge = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setContactInputes({ ...constactInputs, [e.target.name]: e.target.value });
    console.log(constactInputs);
  };

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    e.preventDefault();
    console.log(constactInputs); // Will have to send a email with the data
  };

  return (
    <div className="contactForm">
      <p>{contactFrom[language].message}</p>
      <form className="bodyForm">
        <input
          className="input_form"
          type="text"
          id="name"
          name="name"
          onChange={handleChangge}
          placeholder={contactFrom[language].name}
          required
        />
        <input
          className="input_form"
          type="email"
          id="email"
          name="email"
          onChange={handleChangge}
          placeholder={contactFrom[language].email}
          required
        />
        <textarea
          className="input_form message"
          id="message"
          name="message"
          onChange={handleChangge}
          placeholder={contactFrom[language].message_placeholder}
          required
        ></textarea>
        <button type="submit" onClick={handleSubmit}>
          {contactFrom[language].submit}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
