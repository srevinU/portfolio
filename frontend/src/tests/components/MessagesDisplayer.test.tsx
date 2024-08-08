import { render, screen } from "@testing-library/react";
import MessagesDisplayer from "../../components/MessagesDisplayer";
import { messagesDisplay } from "../../utils/data/messageDisplay";
import { MessageT } from "../../utils/types/MessageDisplay";

describe("MessagesDisplayer", () => {
  it("Renders correctly", () => {
    render(
      <MessagesDisplayer language={"EN"} messagesDisplay={messagesDisplay} />,
    );
  });

  it("Messages are displayed", () => {
    render(
      <MessagesDisplayer language={"EN"} messagesDisplay={messagesDisplay} />,
    );
    messagesDisplay.forEach((message: MessageT) => {
      expect(screen.getByTestId(message.uuid)).toBeInTheDocument();
    });
  });
});
