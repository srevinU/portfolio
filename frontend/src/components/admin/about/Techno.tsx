import { AboutTechnoPropsI } from "../../../utils/interfaces/props";

export function Techno({
  techno,
  parent,
  handleAboutTechnoClicked,
  technosRef,
  setTechnosRef,
}: AboutTechnoPropsI): JSX.Element {
  return (
    <div>
      <label
        className={`config_techno ${techno.active ? " active" : ""}`}
        onClick={() =>
          handleAboutTechnoClicked(techno, technosRef, setTechnosRef, parent)
        }
      >
        {techno.name}
      </label>
    </div>
  );
}
