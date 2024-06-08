import { render } from "@testing-library/react";
import ContactForm from "../../components/ContactForm";
import { contactForm } from "../../utils/data/contactForm";

describe("ContactForm", () => {
  it("Renders correctly", () => {
    render(<ContactForm contactForm={contactForm} language={"FR"} />);
  });
});
