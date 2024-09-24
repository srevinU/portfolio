import { render, screen } from "@testing-library/react";
import HomeConfig from "../../../components/admin/HomeConfig";
import homeData from "../../../utils/data/home";
describe("HomeConfig", () => {
  const components = (
    <HomeConfig homeContent={homeData} handleHomeDataChange={() => null} />
  );

  it("Renders correctly", () => {
    render(components);
  });

  it("Input fields present", () => {
    render(components);
    ["title", "subtitle", "titre", "sous_titre"].forEach((inputField) => {
      expect(
        screen.getByTestId(`${homeData.uuid}_${inputField}`),
      ).toBeInTheDocument();
    });
  });

  it("Input fields are editable", () => {
    render(components);
    ["title", "subtitle", "titre", "sous_titre"].forEach((inputField) => {
      const input = screen.getByTestId(`${homeData.uuid}_${inputField}`);
      expect(input).toHaveValue(inputField);
    });
  });
});
