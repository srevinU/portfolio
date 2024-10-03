import { AboutTechnoPropsI } from "../../../utils/interfaces/props";
import { TechnoT } from "../../../utils/types/SliderProjects";

export function Techno({
  techno,
  parent,
  handleAboutTechnoClicked,
}: AboutTechnoPropsI): JSX.Element {
  console.log("techno", techno);
  console.log("Techn parent", parent.technos);
  return (
    <div>
      <label
        className={`config_techno ${parent.technos.includes(techno._id) ? " active" : ""}`}
        onClick={() => handleAboutTechnoClicked(techno)}
      >
        {techno.name}
      </label>
    </div>
  );
}
