import { render } from "@testing-library/react";
import AboutConfig from "../../../components/admin/AboutConfig";
import { AboutForm } from "../../../entities/AboutForm";
describe("About config", () => {
  const aboutContent = new AboutForm();
  it("Renders correctly", () => {
    render(
      <AboutConfig aboutContent={aboutContent} setAboutContent={() => null} />,
    );
  });
});
