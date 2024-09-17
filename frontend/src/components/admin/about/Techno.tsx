import { AboutTechnoPropsI } from "../../../utils/interfaces/props";

export function Techno({
  techno,
  parent,
  handleAboutTechnoClicked,
}: AboutTechnoPropsI): JSX.Element {
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
