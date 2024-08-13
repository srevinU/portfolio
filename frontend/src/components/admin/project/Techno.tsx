import { ProjectTechnoPropsI } from "../../../utils/interfaces/props";

export function Techno({
  techno,
  parent,
  handleProjectTechnoClicked,
  technosRef,
  setTechnosRef,
}: ProjectTechnoPropsI): JSX.Element {
  return (
    <div>
      <label
        className={`config_techno ${techno.active ? " active" : ""}`}
        onClick={() =>
          handleProjectTechnoClicked(techno, technosRef, setTechnosRef, parent)
        }
      >
        {techno.name}
      </label>
    </div>
  );
}
