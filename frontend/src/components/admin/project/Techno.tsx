import { ProjectTechnoPropsI } from "../../../utils/interfaces/props";

export function Techno({
  parent,
  techno,
  handleProjectTechnoClicked,
}: ProjectTechnoPropsI): JSX.Element {
  return (
    <div>
      <label
        data-testid={`${parent._id}_${techno._id}`}
        className={`config_techno ${parent.technos.includes(techno._id) ? " active" : ""}`}
        onClick={() => handleProjectTechnoClicked(techno, parent)}
      >
        {techno.name}
      </label>
    </div>
  );
}
