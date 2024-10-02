import Slider from "../components/Slider";
import { sliderProjects } from "../utils/data/sliderProjects";
import { Project } from "../utils/entities/Project";
import Reference from "../utils/tools/Reference";
import { LanguageT } from "../utils/types/general";

export default function Projects({
  reference,
  language,
  isMobile,
  projects,
}: {
  reference: Reference;
  language: LanguageT;
  isMobile: boolean;
  projects: Array<Project>;
}): JSX.Element {
  return (
    <div className="projects_page" ref={reference.ref}>
      <Slider
        sliderProjects={projects}
        language={language}
        isMobile={isMobile}
      />
    </div>
  );
}
