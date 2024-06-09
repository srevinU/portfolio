import { render, screen } from "@testing-library/react";
import Slider from "../../components/Slider";
import { sliderProjects } from "../../utils/data/sliderProjects";
import { ProjectT, TechnoT } from "../../utils/types/SliderProjects";

describe("Slider", () => {
  it("Renders correctly", () => {
    render(<Slider sliderProjects={sliderProjects} language={"EN"} />);
  });

  it("Projects diplayed", () => {
    render(<Slider sliderProjects={sliderProjects} language={"EN"} />);

    sliderProjects.forEach((project: ProjectT) => {
      expect(screen.getByTestId(project.dataTestId)).toBeInTheDocument();
      expect(screen.getByText(project.EN.title)).toBeInTheDocument();

      const link = screen.getByTestId(`link_${project.dataTestId}`);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", project.href);
      expect(link).toHaveTextContent(project.EN.label_link);
      link.click();

      project.technos.forEach((techno: TechnoT) => {
        expect(screen.getByTestId(techno.dataTestId)).toBeInTheDocument();
      });
    });
  });

  it("Projects change on mouseover", () => {
    render(<Slider sliderProjects={sliderProjects} language={"EN"} />);

    sliderProjects.forEach((project: ProjectT) => {
      const projectWrapper = screen.getByTestId(project.dataTestId);
      projectWrapper.onmouseover = () => {
        expect(projectWrapper.className).toContain("active");
      };
      projectWrapper.onmouseleave = () => {
        expect(projectWrapper.className).not.toContain("active");
      };
    });
  });
});
