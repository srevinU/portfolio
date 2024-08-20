import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "../../components/ContactForm";
import { contactForm } from "../../utils/data/contactForm";
import languages from "../../utils/data/languages";
import { LanguageT } from "../../utils/types/general";

describe("ContactForm", () => {
  const getComponent = (language: LanguageT) => (
    <ContactForm
      contactForm={contactForm}
      language={language}
      isMobile={false}
      handlePopin={() => null}
    />
  );

  it("Renders correctly with all languages", () => {
    languages.forEach((language) => {
      render(getComponent(language.name));
    });
  });

  it("Input fields present", () => {
    render(getComponent("EN"));
    ["name", "email", "message"].forEach((inputField) => {
      expect(screen.getByTestId(inputField)).toBeInTheDocument();
    });
  });

  it("Submit button present", () => {
    render(getComponent("EN"));
    expect(screen.getByTestId("submit")).toBeInTheDocument();
  });

  it("Invalid email", () => {
    render(getComponent("EN"));
    const email = screen.getByTestId("email");
    userEvent.type(email, "invalid Email");
    expect(email).not.toBeValid();
  });

  it("Invalid name", () => {
    render(getComponent("EN"));
    const name = screen.getByTestId("name");
    userEvent.type(name, "");
    expect(name).not.toBeValid();
  });

  it("Invalid message", () => {
    render(getComponent("EN"));
    const message = screen.getByTestId("message");
    userEvent.type(message, "");
    expect(message).not.toBeValid();
  });
});
