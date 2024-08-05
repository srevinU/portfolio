import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "../../components/ContactForm";
import { contactForm } from "../../utils/data/contactForm";
import languages from "../../utils/data/languages";

describe("ContactForm", () => {
  it("Renders correctly with all languages", () => {
    languages.forEach((language) => {
      render(
        <ContactForm
          contactForm={contactForm}
          language={language.name}
          isMobile={false}
          handlePopin={() => null}
        />,
      );
    });
  });

  it("Input fields present", () => {
    render(
      <ContactForm
        contactForm={contactForm}
        language={"EN"}
        isMobile={false}
        handlePopin={() => null}
      />,
    );
    ["name", "email", "message"].forEach((inputField) => {
      expect(screen.getByTestId(inputField)).toBeInTheDocument();
    });
  });

  it("Submit button present", () => {
    render(
      <ContactForm
        contactForm={contactForm}
        language={"EN"}
        isMobile={false}
        handlePopin={() => null}
      />,
    );
    expect(screen.getByTestId("submit")).toBeInTheDocument();
  });

  it("Invalid email", () => {
    render(
      <ContactForm
        contactForm={contactForm}
        language={"EN"}
        isMobile={false}
        handlePopin={() => null}
      />,
    );
    const email = screen.getByTestId("email");
    userEvent.type(email, "invalid Email");
    expect(email).not.toBeValid();
  });

  it("Invalid name", () => {
    render(
      <ContactForm
        contactForm={contactForm}
        language={"EN"}
        isMobile={false}
        handlePopin={() => null}
      />,
    );
    const name = screen.getByTestId("name");
    userEvent.type(name, "");
    expect(name).not.toBeValid();
  });

  it("Invalid message", () => {
    render(
      <ContactForm
        contactForm={contactForm}
        language={"EN"}
        isMobile={false}
        handlePopin={() => null}
      />,
    );
    const message = screen.getByTestId("message");
    userEvent.type(message, "");
    expect(message).not.toBeValid();
  });
});
