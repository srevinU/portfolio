import ContactForm from "../components/ContactForm";
import { contactForm } from "../utils/data/contactForm";
import { LanguageT } from "../utils/types/general";
import Reference from "../utils/tools/Reference";
import "../style/pages/Contact.css";

export default function Contact({
  reference,
  language,
}: {
  reference: Reference;
  language: LanguageT;
}): JSX.Element {
  return (
    <div className="contact_page" ref={reference.ref}>
      <ContactForm contactForm={contactForm} language={language} />
    </div>
  );
}
