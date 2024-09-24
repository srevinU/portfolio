import { ProjectTechnoPropsI } from "../../../utils/interfaces/props";

export function Techno({
  parent,
  techno,
  handleProjectTechnoClicked,
}: ProjectTechnoPropsI): JSX.Element {
  return (
    <div>
      <label
        data-testid={`${parent.uuid}_${techno.uuid}`}
        className={`config_techno ${parent.technos.includes(techno.uuid) ? " active" : ""}`}
        onClick={() => handleProjectTechnoClicked(techno, parent)}
      >
        {techno.name}
      </label>
    </div>
  );
}
