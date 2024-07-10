import { useState } from "react";
import {
  SliderProjectsT,
  TechnoT,
  ProjectT,
} from "../utils/types/SliderProjects";
import { LanguageT } from "../utils/types/general";
import "../style/components/Slider.css";

function Slider({
  sliderProjects,
  language,
  isMobile,
}: {
  sliderProjects: SliderProjectsT;
  language: LanguageT;
  isMobile: boolean;
}): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const selectProject = (index: number): void => {
    setCurrentSlide(index);
  };

  const dynamicStyle = {
    projectWrapper: {
      gridAutoFlow: isMobile ? "row" : "column",
    },
    projectLink: {
      width: isMobile ? "85px" : "100px",
      fontSize: isMobile ? "10px" : "15px",
    },
    projectHeadLine: {
      fontSize: isMobile ? "15px" : "25px",
    },
  };

  return (
    <div className="slider">
      <section className="projects_wrapper" style={dynamicStyle.projectWrapper}>
        {sliderProjects.map((project: ProjectT) => (
          <div
            className={`project ${project.index === currentSlide ? "active" : ""}`}
            onMouseOver={() => selectProject(project.index)}
            key={project.key}
            data-testid={project.dataTestId}
          >
            <div className="project_image_wrapper">
              <img
                className="project_image"
                src={project.src}
                alt={project[language].label_link}
              />
            </div>
            <div className="project_info_wrapper">
              <h3
                className="project_headline"
                style={dynamicStyle.projectHeadLine}
              >
                {project[language].title}
              </h3>
              {sliderProjects[currentSlide].technos.length > 0 && (
                <section className="logos_wrapper">
                  {project.technos.map((techno: TechnoT) => (
                    <img
                      className="logo"
                      alt={techno.name}
                      src={techno.src}
                      key={techno.key}
                      data-testid={techno.dataTestId}
                    />
                  ))}
                </section>
              )}
              <a
                href={project.href}
                className="project_link"
                style={dynamicStyle.projectLink}
                data-testid={`link_${project.dataTestId}`}
              >
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
