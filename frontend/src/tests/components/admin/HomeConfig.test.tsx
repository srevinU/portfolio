import { render, screen } from "@testing-library/react";
import HomeConfig from "../../../components/admin/HomeConfig";
import { AdminForm } from "../../../utils/entities/AdminForm";
describe("HomeConfig", () => {
  const adminForm = new AdminForm();
  const components = (
    <HomeConfig
      homeContent={adminForm.home}
      handleHomeDataChange={() => null}
    />
  );

  it("Renders correctly", () => {
    render(components);
  });

  it("Input fields present", () => {
    render(components);
    ["title", "subtitle", "title", "subtitle"].forEach((inputField) => {
      expect(screen.getByTestId(`${inputField}`)).toBeInTheDocument();
    });
  });
});
