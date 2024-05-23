import sliderProjects from "../utils/struc/sliderProjects";
import "../css/components/Slider.css";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Slider(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (): void => {
    setCurrentSlide(
      currentSlide === sliderProjects.length - 1 ? 0 : currentSlide + 1,
    );
  };

  const previousSlide = (): void => {
    setCurrentSlide(
      currentSlide === 0 ? sliderProjects.length - 1 : currentSlide - 1,
    );
  };

  const selectProject = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <section className="slider">
      {/* <IoIosArrowBack className='left-arrow' onClick={previousSlide} /> */}
      {sliderProjects.map((project) => (
        <div
          className={project.index === currentSlide ? "slide active" : "slide"}
          key={project.key}
        >
          {
            <img
              className="slide_image"
              src={project.src}
              alt={project.headline}
              onClick={() => selectProject(project.index)}
            />
          }
        </div>
      ))}
      {/* <IoIosArrowForward className='right-arrow' onClick={nextSlide} /> */}
    </section>
  );
}

export default Slider;
