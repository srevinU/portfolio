import Slider from "../components/Slider";
import { sliderProjects } from "../utils/data/sliderProjects";
import Reference from "../utils/tools/Reference";

export default function Projects({
  reference,
}: {
  reference: Reference;
}): JSX.Element {
  return (
    <div className="projects_page" ref={reference.ref}>
      <Slider sliderProjects={sliderProjects} />
    </div>
  );
}
