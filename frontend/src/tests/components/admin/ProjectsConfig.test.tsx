import { render, screen } from "@testing-library/react";
import ProjectsConfig from "../../../components/admin/ProjectsConfig";
import {
  sliderProjects,
  sliderTechnos,
} from "../../../utils/data/sliderProjects";

describe("ProjectConfig", () => {
  it("Renders correctly", () => {
    render(
      <ProjectsConfig projects={sliderProjects} setProjects={() => null} />,
    );
  });

  it("Projects present", () => {
    render(
      <ProjectsConfig projects={sliderProjects} setProjects={() => null} />,
    );
    sliderProjects.forEach((project) => {
      expect(screen.getByTestId(project.uuid)).toBeInTheDocument();
    });
  });

  it("Satus select present", () => {
    render(
      <ProjectsConfig projects={sliderProjects} setProjects={() => null} />,
    );
    sliderProjects.forEach((project) => {
      expect(
        screen.getByTestId(`${project.uuid}_statusSelect`),
      ).toBeInTheDocument();
      expect(screen.getByTestId(`${project.uuid}_active`)).toBeInTheDocument();
      expect(
        screen.getByTestId(`${project.uuid}_in_progress`),
      ).toBeInTheDocument();
      expect(
        screen.getByTestId(`${project.uuid}_inactive`),
      ).toBeInTheDocument();
    });
  });

  it("Technos present", () => {
    render(
      <ProjectsConfig projects={sliderProjects} setProjects={() => null} />,
    );
    sliderTechnos.forEach((techno) => {
      expect(screen.queryAllByText(techno.name)).toHaveLength(
        sliderProjects.length,
      );
    });
  });

  it("Inputs fields are present", () => {
    render(
      <ProjectsConfig projects={sliderProjects} setProjects={() => null} />,
    );
    sliderProjects.forEach((project) => {
      expect(screen.getByTestId(`${project.uuid}_title`)).toBeInTheDocument();
      expect(screen.getByTestId(`${project.uuid}_url`)).toBeInTheDocument();
    });
  });

  it("Inputs fields are editable", () => {
    render(
      <ProjectsConfig projects={sliderProjects} setProjects={() => null} />,
    );
    sliderProjects.forEach((project) => {
      const title = screen.getByTestId(`${project.uuid}_title`);
      const description = screen.getByTestId(`${project.uuid}_url`);
      expect(title).toHaveValue(project.EN.title);
      expect(description).toHaveValue(project.href);
    });
  });
});
