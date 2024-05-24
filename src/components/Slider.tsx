import { sliderProjects } from "../utils/struc/sliderProjects";
import "../css/components/Slider.css";
import { useState } from "react";
import { Techno } from "../utils/struc/sliderProjects";

function Slider(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const selectProject = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <section className="image_wrapper">
        {sliderProjects.map((project) => (
          <div
            className={
              project.index === currentSlide ? "slide active" : "slide"
            }
            key={project.key}
          >
            <img
              className="slide_image"
              src={project.src}
              alt={project.headline}
              onMouseOver={() => selectProject(project.index)}
            />
            <a className="project_link" href="/projects">
              Click me
            </a>
          </div>
        ))}
      </section>

      <section className="details_wrapper">
        {sliderProjects[currentSlide].technos.map((techno: Techno) => (
          <img
            className="logo"
            alt={techno.name}
            src={techno.src}
            key={techno.key}
          />
        ))}
      </section>
    </div>
  );
}

export default Slider;
