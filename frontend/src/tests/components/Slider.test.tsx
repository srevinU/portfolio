import { render, screen } from "@testing-library/react";
import Slider from "../../components/Slider";
import { sliderProjects, sliderTechnos } from "../../utils/data/sliderProjects";
import { ProjectT, TechnoT } from "../../utils/types/SliderProjects";
import languages from "../../utils/data/languages";
import { LanguageT } from "../../utils/types/general";

const checkTechnos = (projectId: string, technosIds: Array<string>): void => {
  sliderTechnos.forEach((techno: TechnoT) => {
    if (technosIds.includes(techno.uuid)) {
      expect(
        screen.getByTestId(`${projectId}_${techno.uuid}`),
      ).toBeInTheDocument();
    }
  });
};

describe("Slider", () => {
  const getComponent = (language: LanguageT) => (
    <Slider
      sliderProjects={sliderProjects}
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

    sliderProjects.forEach((project: ProjectT) => {
      expect(screen.getByTestId(project.uuid)).toBeInTheDocument();
      expect(screen.getByTestId(`${project.uuid}_title`)).toBeInTheDocument();

      const link = screen.getByTestId(`${project.uuid}_link`);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", project.href);
      expect(link).toHaveTextContent(project.EN.label_link);
      link.click();

      checkTechnos(project.uuid, project.technos);
    });
  });

  it("Projects change on mouseover", () => {
    render(getComponent("EN"));

    sliderProjects.forEach((project: ProjectT) => {
      const projectWrapper = screen.getByTestId(project.uuid);
      projectWrapper.onmouseover = () => {
        expect(projectWrapper.className).toContain("active");
      };
      projectWrapper.onmouseleave = () => {
        expect(projectWrapper.className).not.toContain("active");
      };
    });
  });
});
