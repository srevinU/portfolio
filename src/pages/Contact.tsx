import "../css/pages/Contact.css";

function Contact({ reference }: { reference: any }): JSX.Element {
  return (
    <div className="contact_page" ref={reference}>
      <section className="contact_content"></section>;
    </div>
  );
}

export default Contact;
