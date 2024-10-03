import { AboutTechnoPropsI } from "../../../utils/interfaces/props";
import { isActive } from "../../../utils/tools/funtions";

export function Techno({
  techno,
  parent,
  handleAboutTechnoClicked,
}: AboutTechnoPropsI): JSX.Element {
  const { _id } = techno;
  return (
    <div>
      <label
        className={
          isActive(_id, parent.technos)
            ? `config_techno active`
            : `config_techno`
        }
        onClick={() => handleAboutTechnoClicked(techno)}
      >
        {techno.name}
      </label>
    </div>
  );
}
