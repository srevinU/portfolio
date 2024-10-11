import Slider from "../components/Slider";
import { sliderProjects } from "../utils/data/sliderProjects";
import { Project } from "../utils/entities/Project";
import Reference from "../utils/tools/Reference";
import { LanguageT } from "../utils/types/general";

export default function Projects({
  reference,
  language,
  isMobile,
  projectsData,
}: {
  reference: Reference;
  language: LanguageT;
  isMobile: boolean;
  projectsData: Array<Project>;
}): JSX.Element {
  return (
    <div className="projects_page" ref={reference.ref}>
      <Slider
        sliderProjects={projectsData}
        language={language}
        isMobile={isMobile}
      />
    </div>
  );
}
