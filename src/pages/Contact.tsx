import { useContext } from "react";
import { ContryContext } from "../App";
import ContactForm from "../components/ContactForm";
import { contactForm } from "../utils/data/contactForm";
import { LanguageT } from "../utils/types/general";
import Reference from "../utils/tools/Reference";
import "../style/pages/Contact.css";

export default function Contact({
  reference,
}: {
  reference: Reference;
}): JSX.Element {
  const language: LanguageT = useContext(ContryContext).language;
  return (
    <div className="contact_page" ref={reference.ref}>
      <ContactForm contactForm={contactForm} language={language} />
    </div>
  );
}
