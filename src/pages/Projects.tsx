import { RefObject } from "react";
import Slider from "../components/Slider";
import { sliderProjects } from "../utils/data/sliderProjects";

export default function Projects({
  reference,
}: {
  reference: RefObject<HTMLDivElement>;
}): JSX.Element {
  return (
    <div className="projects_page" ref={reference}>
      <Slider sliderProjects={sliderProjects} />
    </div>
  );
}
