import { render } from "@testing-library/react";
import Home from "../../pages/Home";
import Reference from "../../utils/tools/Reference";

test("Renders correctly", () => {
  const reference: Reference = new Reference(
    "home",
    { FR: "acceuil", EN: "home" },
    { current: document.createElement("div") },
  );
  render(<Home reference={reference} language={"EN"} isMobile={false} />);
});
