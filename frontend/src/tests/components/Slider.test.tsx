import { render, screen } from "@testing-library/react";
import Slider from "../../components/Slider";
import { sliderTechnos } from "../../utils/data/sliderProjects";
import { ProjectT, TechnoT } from "../../utils/types/SliderProjects";
import languages from "../../utils/data/languages";
import { LanguageT } from "../../utils/types/general";
import { AdminForm } from "../../utils/entities/AdminForm";

const checkTechnos = (projectId: string, technosIds: Array<string>): void => {
  sliderTechnos.forEach((techno: TechnoT) => {
    if (technosIds.includes(techno._id)) {
      expect(
        screen.getByTestId(`${projectId}_${techno._id}`),
      ).toBeInTheDocument();
    }
  });
};

const adminForm = new AdminForm();

describe("Slider", () => {
  const getComponent = (language: LanguageT) => (
    <Slider
      sliderProjects={adminForm.projects}
      language={language}
      isMobile={false}
    />
  );

  it("Renders correctly with all languages", () => {
    languages.forEach((language) => {
      render(getComponent(language.name));
    });
  });

  it("Projects diplayed", () => {
    render(getComponent("EN"));

    adminForm.projects.forEach((project: ProjectT) => {
      expect(screen.getByTestId(project._id)).toBeInTheDocument();
      expect(screen.getByTestId(`${project._id}_title`)).toBeInTheDocument();

      const link = screen.getByTestId(`${project._id}_link`);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", project.href);
      expect(link).toHaveTextContent(project.EN.label_link);
      link.click();

      checkTechnos(project._id, project.technos);
    });
  });

  it("Projects change on mouseover", () => {
    render(getComponent("EN"));

    adminForm.projects.forEach((project: ProjectT) => {
      const projectWrapper = screen.getByTestId(project._id);
      projectWrapper.onmouseover = () => {
        expect(projectWrapper.className).toContain("active");
      };
      projectWrapper.onmouseleave = () => {
        expect(projectWrapper.className).not.toContain("active");
      };
    });
  });
});
