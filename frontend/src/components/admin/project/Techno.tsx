import { ProjectTechnoPropsI } from "../../../utils/interfaces/props";

export function Techno({
  parent,
  techno,
  handleProjectTechnoClicked,
}: ProjectTechnoPropsI): JSX.Element {
  const { _id } = techno;
  const isActive = (id: string, array: Array<any>) => {
    return array.some((obj) => obj._id === id);
  };
  const isActiveTechno = isActive(_id, parent.technos);
  return (
    <div>
      <label
        data-testid={`${parent._id}_${techno._id}`}
        className={isActiveTechno ? `config_techno active` : `config_techno`}
        onClick={() => handleProjectTechnoClicked(techno, parent)}
      >
        {techno.name}
      </label>
    </div>
  );
}
