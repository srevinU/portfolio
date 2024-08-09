import { render, screen } from "@testing-library/react";
import HomeConfig from "../../../components/admin/HomeConfig";
import { HomeForm } from "../../../entities/HomeForm";
import homeData from "../../../utils/data/home";
describe("HomeConfig", () => {
  it("Renders correctly", () => {
    render(
      <HomeConfig
        homeContent={homeData as HomeForm}
        setHomeContent={() => null}
      />,
    );
  });

  it("Input fields present", () => {
    render(
      <HomeConfig
        homeContent={homeData as HomeForm}
        setHomeContent={() => null}
      />,
    );
    ["title", "subTitle"].forEach((inputField) => {
      expect(screen.getByTestId(inputField)).toBeInTheDocument();
    });
  });

  it("Input fields are editable", () => {
    render(
      <HomeConfig
        homeContent={homeData as HomeForm}
        setHomeContent={() => null}
      />,
    );
    const title = screen.getByTestId("title");
    const subTitle = screen.getByTestId("subTitle");
    expect(title).toHaveValue("title");
    expect(subTitle).toHaveValue("subTitle");
  });
});
