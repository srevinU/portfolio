import { render } from "@testing-library/react";
import AboutConfig from "../../../components/admin/about/AboutConfig";
import { AboutForm } from "../../../utils/entities/AboutForm";
describe("About config", () => {
  const aboutContent = new AboutForm();
  it("Renders correctly", () => {
    render(
      <AboutConfig
        aboutContent={aboutContent}
        handleAboutDataOnChange={() => null}
        handleAboutTechnoClicked={() => null}
        handleAboutDevLanguageClicked={() => null}
        handleDisciplinesSelected={() => null}
      />,
    );
  });
});
