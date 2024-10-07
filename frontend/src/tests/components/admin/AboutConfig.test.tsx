import { render } from "@testing-library/react";
import AboutConfig from "../../../components/admin/about/AboutConfig";
import { AdminForm } from "../../../utils/entities/AdminForm";
describe("About config", () => {
  const adminFrom = new AdminForm();
  it("Renders correctly", () => {
    render(
      <AboutConfig
        aboutContent={adminFrom.about}
        handleAboutDataOnChange={() => null}
        handleAboutTechnoClicked={() => null}
        handleAboutDevLanguageClicked={() => null}
        handleDisciplinesSelected={() => null}
      />,
    );
  });
});
