import { useState } from "react";
import {
  SliderProjectsT,
  TechnoT,
  ProjectT,
} from "../utils/types/SliderProjects";
import { LanguageT } from "../utils/types/general";
import "../style/components/Slider.css";
import { sliderTechnos } from "../utils/data/sliderProjects";
import { isActive } from "../utils/tools/funtions";

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

  const selectProject = (_id: string): void => {
    setCurrentSlide(_id);
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
            className={`project ${project._id === currentSlide ? "active" : ""}`}
            onMouseOver={() => selectProject(project._id)}
            key={project._id}
            data-testid={project._id}
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
                data-testid={`${project._id}_title`}
              >
                {project[language].title}
              </h3>
              {project.technos.length > 0 && (
                <section className="logos_wrapper">
                  {sliderTechnos.map((techno: TechnoT) => {
                    if (isActive(techno._id, project.technos))
                      return (
                        <img
                          key={techno._id}
                          className="logo"
                          alt={techno.name}
                          src={techno.src}
                          data-testid={`${project._id}_${techno._id}`}
                        />
                      );
                  })}
                </section>
              )}
              <a
                href={project.href}
                className="project_link"
                style={dynamicStyle.projectLink}
                data-testid={`${project._id}_link`}
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
