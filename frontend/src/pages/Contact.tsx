import ContactForm from "../components/ContactForm";
import { contactForm } from "../utils/data/contactForm";
import { LanguageT } from "../utils/types/general";
import Reference from "../utils/tools/Reference";
import "../style/pages/Contact.css";

export default function Contact({
  reference,
  language,
  isMobile,
}: {
  reference: Reference;
  language: LanguageT;
  isMobile: boolean;
}): JSX.Element {
  return (
    <div className="contact_page" ref={reference.ref}>
      <ContactForm
        contactForm={contactForm}
        language={language}
        isMobile={isMobile}
      />
    </div>
  );
}
