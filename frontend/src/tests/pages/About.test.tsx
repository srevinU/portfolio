import { render } from "@testing-library/react";
import About from "../../pages/About";
import Reference from "../../utils/tools/Reference";
import { AdminForm } from "../../utils/entities/AdminForm";

test("Renders correctly", () => {
  const adminForm = new AdminForm();
  const reference: Reference = new Reference(
    { FR: "à propos", EN: "about" },
    { current: document.createElement("div") },
  );
  render(
    <About
      reference={reference}
      language={"EN"}
      isMobile={false}
      aboutData={adminForm.about}
    />,
  );
});
