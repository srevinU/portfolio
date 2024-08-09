import "../../style/components/admin/ProjectsConfig.css";
import { RxCrossCircled } from "react-icons/rx";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Project as ProjectEntity } from "../../entities/Project";
import { Techno as TechnoEntity } from "../../entities/Techno";
import {
  useProjectsConfigHooks,
  useProjectHooks,
} from "../../hooks/admin/projectConfig";

function Techno({
  techno,
  handleClick,
}: {
  techno: TechnoEntity;
  handleClick: Function;
}): JSX.Element {
  return (
    <div>
      <label
        className={`config_techno ${techno.active ? " active" : ""}`}
        onClick={() => handleClick(techno)}
      >
        {techno.name}
      </label>
    </div>
  );
}

function Project({
  project,
  deleteProject,
}: {
  project: ProjectEntity;
  deleteProject: Function;
}): JSX.Element {
  const { handleStatusChange, handleTechnoClicked, technos } = useProjectHooks({
    project,
  });

  return (
    <form className="project_config" data-testid={project.uuid}>
      <div className="project_actions">
        <select
          name="status"
          data-testid={`${project.uuid}_statusSelect`}
          defaultValue={project.status}
          onChange={handleStatusChange}
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
        <h3 className="login_title">Title</h3>
        <input
          type="text"
          name="title"
          defaultValue={project.EN.title}
          data-testid={`${project.uuid}_title`}
        />
        <h3 className="login_title">URL</h3>
        <input
          type="text"
          name="url"
          defaultValue={project.href}
          data-testid={`${project.uuid}_url`}
        />
      </div>
      <h3 className="project_title">Technos:</h3>
      <div className="project_technos">
        {technos.map((techno) => (
          <Techno
            techno={techno}
            handleClick={handleTechnoClicked}
            key={techno.uuid}
          />
        ))}
      </div>
    </form>
  );
}

export default function ProjectsConfig({
  projects,
  setProjects,
}: {
  projects: Array<ProjectEntity>;
  setProjects: Function;
}): JSX.Element {
  const { handleAddProject, handleDeleteProject } = useProjectsConfigHooks(
    projects,
    setProjects,
  );

  return (
    <div className="projects_config">
      <h2 className="section_title">Projects</h2>
      <section className="section projects">
        {projects.map((project) => (
          <Project
            project={project}
            deleteProject={handleDeleteProject}
            key={project.uuid}
          />
        ))}
        <IoIosAddCircleOutline
          color="green"
          size={"30px"}
          onClick={handleAddProject}
        />
      </section>
    </div>
  );
}
