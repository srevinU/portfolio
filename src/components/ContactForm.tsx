import "../css/components/ContactForm.css";

function ContactForm(): JSX.Element {
  return (
    <div className="contactForm">
      <p>
        Have a question or want to work together ? <br />
        Leave your details and I'll get back to you as soon as possible.
      </p>
      <form className="bodyForm">
        <input
          className="input_form"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="input_form"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          className="input_form message"
          id="message"
          name="message"
          placeholder="Message:"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
