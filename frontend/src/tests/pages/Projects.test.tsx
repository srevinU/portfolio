import { render } from "@testing-library/react";
import Projects from "../../pages/Projects";
import Reference from "../../utils/tools/Reference";
import adminFormContent from "../../utils/data/adminForm";

test("Renders correctly", () => {
  const reference: Reference = new Reference(
    { FR: "projets", EN: "projects" },
    { current: document.createElement("div") },
  );
  render(
    <Projects
      reference={reference}
      language={"EN"}
      isMobile={false}
      projectsData={adminFormContent.projects}
    />,
  );
});
