import Slider from "../components/Slider";
import { sliderProjects } from "../utils/data/sliderProjects";
import { Project } from "../utils/entities/Project";
import Reference from "../utils/tools/Reference";
import { LanguageT } from "../utils/types/general";

export default function Projects({
  reference,
  language,
  isMobile,
}: {
  reference: Reference;
  language: LanguageT;
  isMobile: boolean;
}): JSX.Element {
  return (
    <div className="projects_page" ref={reference.ref}>
      <Slider
        sliderProjects={sliderProjects}
        language={language}
        isMobile={isMobile}
      />
    </div>
  );
}
