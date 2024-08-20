import "../../../style/components/admin/ProjectsConfig.css";
import { RxCrossCircled } from "react-icons/rx";
import { sliderTechnos } from "../../../utils/data/sliderProjects"; // Will be fetch from the backend (Techno referenciel)
import { ProjectPropsI } from "../../../utils/interfaces/props";
import { Techno } from "./Techno";
import { useReferencialsHooks } from "../../../hooks/admin/referencials";
import { Techno as TechnoEntity } from "../../../utils/entities/Techno";

export function Project({
  project,
  deleteProject,
  handleProjectDataChange,
  handleProjectStatusChange,
  handleProjectTechnoClicked,
}: ProjectPropsI): JSX.Element {
  const { technosRef } = useReferencialsHooks();

  sliderTechnos.forEach((techno) => {
    if (project.technos.includes(techno.uuid)) {
      techno.active = true;
    }
    techno.active = false;
  });

  return (
    <form className="project_config" data-testid={project.uuid}>
      <div className="project_actions">
        <select
          name="status"
          data-testid={`${project.uuid}_statusSelect`}
          defaultValue={project.status}
          onChange={(event) => handleProjectStatusChange(event, project)}
        >
          <option value="active" data-testid={`${project.uuid}_active`}>
            Active
          </option>
          <option
            value="in_progress"
            data-testid={`${project.uuid}_in_progress`}
          >
            In Progress
          </option>
          <option value="inactive" data-testid={`${project.uuid}_inactive`}>
            Inactive
          </option>
        </select>
        <RxCrossCircled
          color="red"
          size={"20px"}
          onClick={() => deleteProject(project)}
        />
      </div>
      <div className="project_inputs">
        <h3 className="login_title">Title (EN)</h3>
        <input
          type="text"
          name="title"
          defaultValue={project.EN.title}
          data-testid={`${project.uuid}_title`}
          onChange={(event) => handleProjectDataChange(event, project, "EN")}
        />
        <h3 className="login_title">URL (EN)</h3>
        <input
          type="text"
          name="label_link"
          defaultValue={project.EN.label_link}
          data-testid={`${project.uuid}_url`}
          onChange={(event) => handleProjectDataChange(event, project, "EN")}
        />
        <h3 className="login_title">Titre (FR)</h3>
        <input
          type="text"
          name="title"
          defaultValue={project.FR.title}
          data-testid={`${project.uuid}_title`}
          onChange={(event) => handleProjectDataChange(event, project, "FR")}
        />
        <h3 className="login_title">URL (FR)</h3>
        <input
          type="text"
          name="label_link"
          defaultValue={project.FR.label_link}
          data-testid={`${project.uuid}_url`}
          onChange={(event) => handleProjectDataChange(event, project, "FR")}
        />
      </div>
      <h3 className="project_title">Technos:</h3>
      <div className="project_technos">
        {technosRef.map((techno: TechnoEntity) => (
          <Techno
            key={techno.uuid}
            techno={techno}
            parent={project}
            handleProjectTechnoClicked={handleProjectTechnoClicked}
          />
        ))}
      </div>
    </form>
  );
}
