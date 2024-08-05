import { render } from "@testing-library/react";
import Contact from "../../pages/Contact";
import Reference from "../../utils/tools/Reference";

test("Renders correctly", () => {
  const reference: Reference = new Reference(
    "contact",
    { FR: "contact", EN: "contact" },
    { current: document.createElement("div") },
  );
  render(<Contact reference={reference} language={"EN"} isMobile={false} handlePopin={() => null}/>);
});
