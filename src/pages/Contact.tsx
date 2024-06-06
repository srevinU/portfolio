import { RefObject } from "react";
import ContactForm from "../components/ContactForm";
import "../style/pages/Contact.css";

export default function Contact({
  reference,
}: {
  reference: RefObject<HTMLDivElement>;
}): JSX.Element {
  return (
    <div className="contact_page" ref={reference}>
      <ContactForm />
    </div>
  );
}
