import { useState, useEffect } from "react";
import { LanguageT } from "../utils/types/general";
import { MessageT, MessagesDisplayT } from "../utils/types/MessageDisplay";
import "../style/components/MessagesDisplayer.css";

function MessagesDisplayer({
  language,
  messagesDisplay,
}: {
  language: LanguageT;
  messagesDisplay: MessagesDisplayT;
}): JSX.Element {
  const [state, setState] = useState<"hidden" | "visible">("hidden");
  const message: MessageT = messagesDisplay[0]; // Only display the first message at the moment
  const duration: number = 40000;
  const intervalDuration: number = 60000;

  useEffect(() => {
    const showMessage = () => {
      setState("visible");
      setTimeout(() => {
        setState("hidden");
      }, duration);
    };
    showMessage();

    const intervalId = setInterval((): void => {
      showMessage();
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [duration]);

  return (
    <section className={`messages-displayer ${state}`}>
      <p data-testid={message.uuid}>{message[language]}</p>
    </section>
  );
}

export default MessagesDisplayer;
