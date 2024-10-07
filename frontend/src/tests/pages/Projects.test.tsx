import { render } from "@testing-library/react";
import Projects from "../../pages/Projects";
import Reference from "../../utils/tools/Reference";
import { AdminForm } from "../../utils/entities/AdminForm";

test("Renders correctly", () => {
  const adminForm = new AdminForm();
  const reference: Reference = new Reference(
    { FR: "projets", EN: "projects" },
    { current: document.createElement("div") },
  );
  render(
    <Projects
      reference={reference}
      language={"EN"}
      isMobile={false}
      projectsData={adminForm.projects}
    />,
  );
});
