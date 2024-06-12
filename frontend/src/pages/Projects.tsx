import Slider from "../components/Slider";
import { sliderProjects } from "../utils/data/sliderProjects";
import Reference from "../utils/tools/Reference";
import { LanguageT } from "../utils/types/general";

export default function Projects({
  reference,
  language,
}: {
  reference: Reference;
  language: LanguageT;
}): JSX.Element {
  return (
    <div className="projects_page" ref={reference.ref}>
      <Slider sliderProjects={sliderProjects} language={language} />
    </div>
  );
}
