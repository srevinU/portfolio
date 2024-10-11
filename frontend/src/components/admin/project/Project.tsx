import "../../../style/components/admin/ProjectsConfig.css";
import { RxCrossCircled } from "react-icons/rx";
import { ProjectPropsI } from "../../../utils/interfaces/props";
import { Techno } from "./Techno";
import { useReferencialsHooks } from "../../../hooks/admin/referencials";
import { Techno as TechnoEntity } from "../../../utils/entities/Techno";

export function Project({
  project,
  deleteProject,
  handleProjectDataChangeWithLanguage,
  handleProjectDataChange,
  handleProjectStatusChange,
  handleProjectTechnoClicked,
}: ProjectPropsI): JSX.Element {
  const { technosRef } = useReferencialsHooks();
  return (
    <form className="project_config" data-testid={project._id}>
      <div className="project_actions">
        <select
          name="status"
          data-testid={`${project._id}_statusSelect`}
          defaultValue={project.status}
          onChange={(event) => handleProjectStatusChange(event, project)}
        >
          <option value="active" data-testid={`${project._id}_active`}>
            Active
          </option>
          <option
            value="in_progress"
            data-testid={`${project._id}_in_progress`}
          >
            In Progress
          </option>
          <option value="inactive" data-testid={`${project._id}_inactive`}>
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
        <h3>Title (EN)</h3>
        <input
          type="text"
          name="title"
          defaultValue={project.EN.title}
          data-testid={`${project._id}_title`}
          onChange={(event) =>
            handleProjectDataChangeWithLanguage(event, project, "EN")
          }
        />
        <h3>Titre (FR)</h3>
        <input
          type="text"
          name="title"
          defaultValue={project.FR.title}
          data-testid={`${project._id}_titre`}
          onChange={(event) =>
            handleProjectDataChangeWithLanguage(event, project, "FR")
          }
        />
        <h3>Image link</h3>
        <input
          type="text"
          name="src"
          defaultValue={project.src}
          data-testid={`${project._id}_lien`}
          onChange={(event) => handleProjectDataChange(event, project)}
        />
        <h3>URL</h3>
        <input
          type="text"
          name="href"
          defaultValue={project.href}
          data-testid={`${project._id}_lien`}
          onChange={(event) => handleProjectDataChange(event, project)}
        />
      </div>
      <h3 className="project_title">Technos:</h3>
      <div className="project_technos">
        {technosRef.map((techno: TechnoEntity) => (
          <Techno
            key={techno._id}
            techno={techno}
            parent={project}
            handleProjectTechnoClicked={handleProjectTechnoClicked}
          />
        ))}
      </div>
    </form>
  );
}
