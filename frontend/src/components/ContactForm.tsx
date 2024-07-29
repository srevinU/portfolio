import { LanguageT } from "../utils/types/general";
import { ContactsFormT } from "../utils/types/ContactForm";
import "../style/components/ContactForm.css";
import Popin from "./Popin";
import useContactFormsHooks from "../hooks/contactFroms";

function ContactForm({
  contactForm,
  language,
  isMobile,
}: {
  contactForm: ContactsFormT;
  language: LanguageT;
  isMobile: boolean;
}): JSX.Element {
  const { formRef, handleChange, handleSubmit, loading, popIn } =
    useContactFormsHooks();

  return (
    <div className="contactForm">
      <form
        ref={formRef}
        className="bodyForm"
        style={{ width: isMobile ? "75%" : "25%" }}
      >
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
        <button
          type="submit"
          data-testid="submit"
          onClick={handleSubmit}
          disabled={loading}
        >
          {contactForm[language].submit}
        </button>
      </form>
      <Popin popInData={popIn} isMobile={isMobile} />
    </div>
  );
}

export default ContactForm;
