import ContactForm from "../components/ContactForm";
import "../style/pages/Contact.css";
import Reference from "../utils/tools/Reference";

export default function Contact({
  reference,
}: {
  reference: Reference;
}): JSX.Element {
  return (
    <div className="contact_page" ref={reference.ref}>
      <ContactForm />
    </div>
  );
}
