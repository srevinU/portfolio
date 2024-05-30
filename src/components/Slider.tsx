import { useState, useContext } from "react";
import { ContryContext } from "../App";
import {
  SliderProjectsT,
  TechnoT,
  ProjectT,
} from "../utils/types/SliderProjects";
import { LanguageT } from "../utils/types/general";
import "../style/components/Slider.css";

function Slider({
  sliderProjects,
}: {
  sliderProjects: SliderProjectsT;
}): JSX.Element {
  const language: LanguageT = useContext(ContryContext).language;
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const selectProject = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <section className="projects_wrapper">
        {sliderProjects.map((project: ProjectT) => (
          <div
            key={project.key}
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
                alt={project[language].label_link}
              />
            </div>
            <div className="project_info">
              <h3 className="project_headline">{project[language].title}</h3>
              {sliderProjects[currentSlide].technos.length > 0 && (
                <section className="logos_wrapper">
                  {project.technos.map((techno: TechnoT) => (
                    <img
                      className="logo"
                      alt={techno.name}
                      src={techno.src}
                      key={techno.key}
                    />
                  ))}
                </section>
              )}
              <a href={project.href} className="project_link">
                {project[language].label_link}
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Slider;
