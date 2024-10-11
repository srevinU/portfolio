import { screen, render } from "@testing-library/react";
import ExperienceConfig from "../../../components/admin/ExperienceConfig";
import { experiences } from "../../../utils/data/experiences";

describe("Exprience", () => {
  const components = (
    <ExperienceConfig
      experiences={experiences}
      handleAddEperience={() => null}
      handleDeleteExperience={() => null}
      handleExperienceValueChange={() => null}
    />
  );

  it("Renders correctly", () => {
    render(components);
  });

  it("Renders the experiences", () => {
    render(components);
    experiences.forEach((experience) => {
      expect(screen.getByTestId(experience._id)).toBeInTheDocument();
    });
  });

  it("Select field present", () => {
    render(components);
    experiences.forEach((experience) => {
      ["select", "active", "inactive"].forEach((selectField) => {
        expect(
          screen.getByTestId(`${experience._id}_${selectField}`),
        ).toBeInTheDocument();
      });
    });
  });

  it("Input fields present", () => {
    render(components);
    experiences.forEach((experience) => {
      ["title", "company", "start_date", "end_date"].forEach((inputField) => {
        expect(
          screen.getByTestId(`${experience._id}_${inputField}`),
        ).toBeInTheDocument();
      });
    });
  });

  it("Input fields are editable", () => {
    render(components);
    experiences.forEach((experience) => {
      ["title", "company"].forEach((inputField) => {
        const input = screen.getByTestId(`${experience._id}_${inputField}`);
        expect(input).toHaveValue(inputField);
      });
      ["start_date", "end_date"].forEach((inputField) => {
        const input = screen.getByTestId(`${experience._id}_${inputField}`);
        expect(input).toHaveValue("2500-01-01");
      });
    });
  });
});
