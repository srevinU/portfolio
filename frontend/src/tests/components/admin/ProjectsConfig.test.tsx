import { render, screen } from "@testing-library/react";
import ProjectsConfig from "../../../components/admin/project/ProjectsConfig";
import { AdminForm } from "../../../utils/entities/AdminForm";

describe("ProjectConfig", () => {
  const adminForm = new AdminForm();
  const component = (
    <ProjectsConfig
      projects={adminForm.projects}
      handleAddProject={() => null}
      handleDeleteProject={() => null}
      handleProjectDataChangeWithLanguage={() => null}
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
    adminForm.projects.forEach((project) => {
      expect(screen.getByTestId(project._id)).toBeInTheDocument();
    });
  });

  it("Satus select present", () => {
    render(component);
    adminForm.projects.forEach((project) => {
      ["statusSelect", "active", "in_progress", "inactive"].forEach(
        (select) => {
          expect(
            screen.getByTestId(`${project._id}_${select}`),
          ).toBeInTheDocument();
        },
      );
    });
  });

  it("Technos present", () => {
    render(component);
    adminForm.projects.forEach((project) => {
      project.technos.forEach((techno) => {
        expect(
          screen.getByTestId(`${project._id}_${techno}`),
        ).toBeInTheDocument();
      });
    });
  });

  it("Inputs fields are present", () => {
    render(component);
    adminForm.projects.forEach((project) => {
      ["title", "url", "titre", "lien"].forEach((input) => {
        expect(
          screen.getByTestId(`${project._id}_${input}`),
        ).toBeInTheDocument();
      });
    });
  });

  it("Inputs fields are editable", () => {
    render(component);
    adminForm.projects.forEach((project) => {
      ["title", "url", "titre", "lien"].forEach((inputField) => {
        const input = screen.getByTestId(`${project._id}_${inputField}`);
        expect(input).toHaveValue(inputField);
      });
    });
  });
});
