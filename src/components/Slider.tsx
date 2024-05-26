import { useState } from "react";
import "../css/components/Slider.css";
import {
  SliderProjectsT,
  TechnoT,
  ProjectT,
} from "../utils/types/SliderProjects";

function Slider({
  sliderProjects,
}: {
  sliderProjects: SliderProjectsT;
}): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const selectProject = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <section className="projects_wrapper">
        {sliderProjects.map((project: ProjectT) => (
          <div
            className={
              project.index === currentSlide
                ? "project_wrapper active"
                : "project_wrapper"
            }
            onMouseOver={() => selectProject(project.index)}
          >
            <div
              className={
                project.index === currentSlide ? "project active" : "project"
              }
              key={project.key}
            >
              <img
                className="project_image"
                src={project.src}
                alt={project.headline}
              />
            </div>
            <div className="project_info">
              <h3 className="project_headline">{project.headline}</h3>
              <a href={project.link.href} className="project_link">
                {project.link.label}
              </a>
            </div>
          </div>
        ))}
      </section>

      {sliderProjects[currentSlide].technos.length > 0 && (
        <section className="logos_wrapper">
          {sliderProjects[currentSlide].technos.map((techno: TechnoT) => (
            <img
              className="logo"
              alt={techno.name}
              src={techno.src}
              key={techno.key}
            />
          ))}
        </section>
      )}
    </div>
  );
}

export default Slider;
