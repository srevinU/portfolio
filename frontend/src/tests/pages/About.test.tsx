import { render } from "@testing-library/react";
import About from "../../pages/About";
import Reference from "../../utils/tools/Reference";
import { aboutContent } from "../../utils/data/aboutContent";

test("Renders correctly", () => {
  const reference: Reference = new Reference(
    { FR: "à propos", EN: "about" },
    { current: document.createElement("div") },
  );
  render(
    <About
      reference={reference}
      language={"EN"}
      isMobile={false}
      aboutData={aboutContent}
    />,
  );
});
