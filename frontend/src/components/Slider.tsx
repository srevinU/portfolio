import { useState } from "react";
import {
  SliderProjectsT,
  TechnoT,
  ProjectT,
} from "../utils/types/SliderProjects";
import { LanguageT } from "../utils/types/general";
import "../style/components/Slider.css";
import { sliderTechnos } from "../utils/data/sliderProjects";

function Slider({
  sliderProjects,
  language,
  isMobile,
}: {
  sliderProjects: SliderProjectsT;
  language: LanguageT;
  isMobile: boolean;
}): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<string | null>(null);

  const selectProject = (uuid: string): void => {
    setCurrentSlide(uuid);
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
            className={`project ${project.uuid === currentSlide ? "active" : ""}`}
            onMouseOver={() => selectProject(project.uuid)}
            key={project.uuid}
            data-testid={project.uuid}
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
                data-testid={`${project.uuid}_title`}
              >
                {project[language].title}
              </h3>
              {project.technos.length > 0 && (
                <section className="logos_wrapper">
                  {sliderTechnos.map((techno: TechnoT) => {
                    if (project.technos.includes(techno.uuid))
                      return (
                        <img
                          key={techno.uuid}
                          className="logo"
                          alt={techno.name}
                          src={techno.src}
                          data-testid={`${project.uuid}_${techno.uuid}`}
                        />
                      );
                  })}
                </section>
              )}
              <a
                href={project.href}
                className="project_link"
                style={dynamicStyle.projectLink}
                data-testid={`${project.uuid}_link`}
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
