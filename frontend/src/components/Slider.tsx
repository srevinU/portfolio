import { useState } from "react";
import {
  SliderProjectsT,
  TechnoT,
  ProjectT,
} from "../utils/types/SliderProjects";
import { LanguageT } from "../utils/types/general";
import "../style/components/web/Slider.css";

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
      margin: isMobile ? "25px" : "",
    },
    projectImage: {
      maxWidth: isMobile ? "250px" : "500px",
    },
    project: {
      opacity: isMobile ? "0.7" : "0.7",
    },
    projectLink: {
      left: isMobile ? "60%" : "75%",
      fontSize: isMobile ? "0.7em" : "",
    },
    projectHeadLine: {
      fontSize: isMobile ? "1em" : "1.5em",
    },
  };

  return (
    <div className="slider">
      <section
        className="projects_wrapper"
        style={{ flexDirection: isMobile ? "column" : "row" }}
      >
        {sliderProjects.map((project: ProjectT) => (
          <div
            key={project.key}
            className={`project_wrapper ${project.index === currentSlide ? "active" : ""}`}
            style={dynamicStyle.projectWrapper}
            onMouseOver={() => selectProject(project.index)}
            data-testid={project.dataTestId}
          >
            <div
              className={`project ${project.index === currentSlide ? "active" : ""}`}
              style={dynamicStyle.project}
              key={project.key}
            >
              <img
                className="project_image"
                style={dynamicStyle.projectImage}
                src={project.src}
                alt={project[language].label_link}
              />
            </div>
            <div className="project_info">
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
