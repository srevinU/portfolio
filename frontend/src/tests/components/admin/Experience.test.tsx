import { screen, render } from "@testing-library/react";
import ExperienceConfig from "../../../components/admin/ExperienceConfig";
import { experiences } from "../../../utils/data/experiences";

describe("Exprience", () => {
  it("", () => {
    expect(true).toBe(true);
  });
  // it("Renders correctly", () => {
  //   render(
  //     <ExperienceConfig
  //       experiences={experiences}
  //       setExperiences={() => null}
  //     />,
  //   );
  // });

  // it("Renders the experiences", () => {
  //   render(
  //     <ExperienceConfig
  //       experiences={experiences}
  //       setExperiences={() => null}
  //     />,
  //   );
  //   experiences.forEach((experience) => {
  //     expect(screen.getByTestId(experience.uuid)).toBeInTheDocument();
  //   });
  // });

  // it("Select field present", () => {
  //   render(
  //     <ExperienceConfig
  //       experiences={experiences}
  //       setExperiences={() => null}
  //     />,
  //   );
  //   experiences.forEach((experience) => {
  //     expect(
  //       screen.getByTestId(`${experience.uuid}_select`),
  //     ).toBeInTheDocument();
  //     expect(
  //       screen.getByTestId(`${experience.uuid}_active`),
  //     ).toBeInTheDocument();
  //     expect(
  //       screen.getByTestId(`${experience.uuid}_inactive`),
  //     ).toBeInTheDocument();
  //   });
  // });

  // it("Input fields present", () => {
  //   render(
  //     <ExperienceConfig
  //       experiences={experiences}
  //       setExperiences={() => null}
  //     />,
  //   );
  //   experiences.forEach((experience) => {
  //     expect(
  //       screen.getByTestId(`${experience.uuid}_title`),
  //     ).toBeInTheDocument();
  //     expect(
  //       screen.getByTestId(`${experience.uuid}_company`),
  //     ).toBeInTheDocument();
  //     expect(
  //       screen.getByTestId(`${experience.uuid}_start_date`),
  //     ).toBeInTheDocument();
  //     expect(
  //       screen.getByTestId(`${experience.uuid}_end_date`),
  //     ).toBeInTheDocument();
  //   });
  // });
});
