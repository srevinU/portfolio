import { render } from "@testing-library/react";
import Home from "../../pages/Home";
import Reference from "../../utils/tools/Reference";
import { AdminForm } from "../../utils/entities/AdminForm";

test("Renders correctly", () => {
  const adminForm = new AdminForm();
  const reference: Reference = new Reference(
    { FR: "acceuil", EN: "home" },
    { current: document.createElement("div") },
  );
  render(
    <Home
      reference={reference}
      language={"EN"}
      isMobile={false}
      homeData={adminForm.home}
    />,
  );
});
