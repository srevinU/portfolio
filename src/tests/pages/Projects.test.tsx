import { render } from "@testing-library/react";
import Projects from "../../pages/Projects";
import Reference from "../../utils/tools/Reference";

test("Renders correctly", () => {
  const reference: Reference = new Reference(
    "projects",
    { FR: "projets", EN: "projects" },
    { current: document.createElement("div") },
  );
  render(<Projects reference={reference} language={"EN"} />);
});
