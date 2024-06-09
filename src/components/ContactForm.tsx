import { useState } from "react";
import { LanguageT } from "../utils/types/general";
import { ContactsFormT, ContactInputsFormT } from "../utils/types/ContactForm";
import "../style/components/ContactForm.css";

function ContactForm({
  contactForm,
  language,
}: {
  contactForm: ContactsFormT;
  language: LanguageT;
}): JSX.Element {
  const inputsForm: ContactInputsFormT = {
    name: "",
    email: "",
    message: "",
  };

  const [constactInputs, setContactInputs] =
    useState<ContactInputsFormT>(inputsForm);

  const handleChangge = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setContactInputs({ ...constactInputs, [e.target.name]: e.target.value });
  };

  const isFormValide = (): boolean => {
    return (
      constactInputs.name !== "" &&
      constactInputs.email !== "" &&
      constactInputs.message !== ""
    );
  }

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    if (isFormValide()) {
      e.preventDefault();
      console.log("Inputs values to send:", constactInputs); 
    }
  };

  return (
    <div className="contactForm">
      {/* <p>{contactFrom[language].message}</p> */}
      <form className="bodyForm">
        <input
          className="input_form"
          type="text"
          id="name"
          name="name"
          data-testid="name"
          onChange={handleChangge}
          placeholder={contactForm[language].name}
          required
        />
        <input
          className="input_form"
          type="email"
          id="email"
          name="email"
          data-testid="email"
          onChange={handleChangge}
          placeholder={contactForm[language].email}
          required
        />
        <textarea
          className="input_form message"
          id="message"
          name="message"
          data-testid="message"
          onChange={handleChangge}
          placeholder={contactForm[language].message_placeholder}
          required
        ></textarea>
        <button type="submit" data-testid="submit" onClick={handleSubmit}>
          {contactForm[language].submit}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
