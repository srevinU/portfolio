import Slider from "../components/Slider";
import { sliderProjects } from "../utils/data/sliderProjects";

function Projects({ reference }: { reference: any }): JSX.Element {
  return (
    <div className="projects_page" ref={reference}>
      <Slider sliderProjects={sliderProjects} />
    </div>
  );
}

export default Projects;
