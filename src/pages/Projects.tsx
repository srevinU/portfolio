import "../css/pages/Projects.css";
import Slider from "../components/Slider";
import { sliderProjects } from "../utils/struc/sliderProjects";

function Projects(): JSX.Element {
  return (
    <div className="projects_page">
      <Slider sliderProjects={sliderProjects} />
    </div>
  );
}

export default Projects;
