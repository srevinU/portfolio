import { render, screen } from "@testing-library/react";
import MessagesDisplayer from "../../components/MessagesDisplayer";
import { messagesDisplay } from "../../utils/data/messageDisplay";
import { MessageT } from "../../utils/types/MessageDisplay";
import languages from "../../utils/data/languages";
import { LanguageT } from "../../utils/types/general";

describe("MessagesDisplayer", () => {
  const getComponent = (language: LanguageT) => (
    <MessagesDisplayer language={language} messagesDisplay={messagesDisplay} />
  );

  it("Renders correctly with all languages", () => {
    languages.forEach((language) => {
      render(getComponent(language.name));
    });
  });

  it("Messages are displayed", () => {
    render(getComponent("EN"));
    messagesDisplay.forEach((message: MessageT) => {
      expect(screen.getByTestId(message.uuid)).toBeInTheDocument();
    });
  });
});
