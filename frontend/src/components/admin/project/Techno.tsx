import { ProjectTechnoPropsI } from "../../../utils/interfaces/props";
import { isActive } from "../../../utils/tools/funtions";

export function Techno({
  parent,
  techno,
  handleProjectTechnoClicked,
}: ProjectTechnoPropsI): JSX.Element {
  const { _id } = techno;
  return (
    <div>
      <label
        data-testid={`${parent._id}_${techno._id}`}
        className={
          isActive(_id, parent.technos)
            ? `config_techno active`
            : `config_techno`
        }
        onClick={() => handleProjectTechnoClicked(techno, parent)}
      >
        {techno.name}
      </label>
    </div>
  );
}
