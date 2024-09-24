import { render, screen } from "@testing-library/react";
import ProjectsConfig from "../../../components/admin/project/ProjectsConfig";
import { sliderProjects } from "../../../utils/data/sliderProjects";

describe("ProjectConfig", () => {
  const component = (
    <ProjectsConfig
      projects={sliderProjects}
      handleAddProject={() => null}
      handleDeleteProject={() => null}
      handleProjectDataChange={() => null}
      handleProjectStatusChange={() => null}
      handleProjectTechnoClicked={() => null}
    />
  );

  it("Renders correctly", () => {
    render(component);
  });

  it("Projects present", () => {
    render(component);
    sliderProjects.forEach((project) => {
      expect(screen.getByTestId(project.uuid)).toBeInTheDocument();
    });
  });

  it("Satus select present", () => {
    render(component);
    sliderProjects.forEach((project) => {
      ["statusSelect", "active", "in_progress", "inactive"].forEach(
        (select) => {
          expect(
            screen.getByTestId(`${project.uuid}_${select}`),
          ).toBeInTheDocument();
        },
      );
    });
  });

  it("Technos present", () => {
    render(component);
    sliderProjects.forEach((project) => {
      project.technos.forEach((techno) => {
        expect(
          screen.getByTestId(`${project.uuid}_${techno}`),
        ).toBeInTheDocument();
      });
    });
  });

  it("Inputs fields are present", () => {
    render(component);
    sliderProjects.forEach((project) => {
      ["title", "url", "titre", "lien"].forEach((input) => {
        expect(
          screen.getByTestId(`${project.uuid}_${input}`),
        ).toBeInTheDocument();
      });
    });
  });

  it("Inputs fields are editable", () => {
    render(component);
    sliderProjects.forEach((project) => {
      ["title", "url", "titre", "lien"].forEach((inputField) => {
        const input = screen.getByTestId(`${project.uuid}_${inputField}`);
        expect(input).toHaveValue(inputField);
      });
    });
  });
});
