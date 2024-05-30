import ContactForm from "../components/ContactForm";
import "../style/pages/Contact.css";

function Contact({ reference }: { reference: any }): JSX.Element {
  return (
    <div className="contact_page" ref={reference}>
      <ContactForm />
    </div>
  );
}

export default Contact;
