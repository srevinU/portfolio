import { AboutTechnoPropsI } from "../../../utils/interfaces/props";
import { TechnoT } from "../../../utils/types/SliderProjects";

export function Techno({
  techno,
  parent,
  handleAboutTechnoClicked,
}: AboutTechnoPropsI): JSX.Element {
  const { _id } = techno;
  const isActive = (id: string, array: Array<any>) => {
    return array.some((obj) => obj._id === id);
  };
  const isActiveTechno = isActive(_id, parent.technos);
  return (
    <div>
      <label
        className={isActiveTechno ? `config_techno active` : `config_techno`}
        onClick={() => handleAboutTechnoClicked(techno)}
      >
        {techno.name}
      </label>
    </div>
  );
}
