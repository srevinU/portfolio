import { useContext } from "react";
import { ContryContext } from "../App";
import { LanguageT } from "../utils/types/general";
import contactFrom from "../utils/data/contactForm";
import "../style/components/ContactForm.css";

function ContactForm(): JSX.Element {
  const language: LanguageT = useContext(ContryContext).language;

  return (
    <div className="contactForm">
      <p>{contactFrom[language].message}</p>
      <form className="bodyForm">
        <input
          className="input_form"
          type="text"
          id="name"
          name="name"
          placeholder={contactFrom[language].name}
          required
        />
        <input
          className="input_form"
          type="email"
          id="email"
          name="email"
          placeholder={contactFrom[language].email}
          required
        />
        <textarea
          className="input_form message"
          id="message"
          name="message"
          placeholder={contactFrom[language].message_placeholder}
          required
        ></textarea>
        <button type="submit">{contactFrom[language].submit}</button>
      </form>
    </div>
  );
}

export default ContactForm;
