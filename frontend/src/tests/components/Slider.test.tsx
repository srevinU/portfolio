import { render, screen } from "@testing-library/react";
import Slider from "../../components/Slider";
import { sliderProjects, sliderTechnos } from "../../utils/data/sliderProjects";
import { ProjectT, TechnoT } from "../../utils/types/SliderProjects";

const checkTechnos = (technosIds: Array<string>): void => {
  sliderTechnos.forEach((techno: TechnoT) => {
    if (technosIds.includes(techno.uuid)) {
      expect(screen.getByTestId(techno.uuid)).toBeInTheDocument();
    }
  });
};

describe("Slider", () => {
  it("Renders correctly", () => {
    render(
      <Slider
        sliderProjects={sliderProjects}
        language={"EN"}
        isMobile={false}
      />,
    );
  });

  it("Projects diplayed", () => {
    render(
      <Slider
        sliderProjects={sliderProjects}
        language={"EN"}
        isMobile={false}
      />,
    );

    sliderProjects.forEach((project: ProjectT) => {
      expect(screen.getByTestId(project.uuid)).toBeInTheDocument();
      expect(screen.getByText(project.EN.title)).toBeInTheDocument();

      const link = screen.getByTestId(`link_${project.uuid}`);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", project.href);
      expect(link).toHaveTextContent(project.EN.label_link);
      link.click();

      checkTechnos(project.technos);
    });
  });

  it("Projects change on mouseover", () => {
    render(
      <Slider
        sliderProjects={sliderProjects}
        language={"EN"}
        isMobile={false}
      />,
    );

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
