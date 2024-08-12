import "../../style/components/admin/ProjectsConfig.css";
import { RxCrossCircled } from "react-icons/rx";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Project as ProjectEntity } from "../../entities/Project";
import { Techno as TechnoEntity } from "../../entities/Techno";
import { MouseEventHandler, ChangeEvent, useState } from "react";
import { sliderTechnos } from "../../utils/data/sliderProjects"; // Will be fetch from the backend (Techno referenciel)

function Techno({
  techno,
  project,
  handleProjectTechnoClicked,
  technosRef,
  setTechnosRef,
}: {
  techno: TechnoEntity;
  project: ProjectEntity;
  handleProjectTechnoClicked: (
    technoClicked: TechnoEntity,
    technosReferencial: Array<TechnoEntity>,
    setTechnosReferencial: React.Dispatch<React.SetStateAction<TechnoEntity[]>>,
    project: ProjectEntity,
  ) => void;
  technosRef: Array<TechnoEntity>;
  setTechnosRef: React.Dispatch<React.SetStateAction<TechnoEntity[]>>;
}): JSX.Element {
  return (
    <div>
      <label
        className={`config_techno ${techno.active ? " active" : ""}`}
        onClick={() =>
          handleProjectTechnoClicked(techno, technosRef, setTechnosRef, project)
        }
      >
        {techno.name}
      </label>
    </div>
  );
}

function Project({
  project,
  deleteProject,
  handleProjectDataChange,
  handleProjectStatusChange,
  handleProjectTechnoClicked,
  technosReferencial,
}: {
  project: ProjectEntity;
  deleteProject: (project: ProjectEntity) => void;
  handleProjectDataChange: (
    event: ChangeEvent<HTMLInputElement>,
    project: ProjectEntity,
    language: "EN" | "FR",
  ) => void;
  handleProjectStatusChange: (
    event: ChangeEvent<HTMLSelectElement>,
    project: ProjectEntity,
  ) => void;
  handleProjectTechnoClicked: (
    technoClicked: TechnoEntity,
    TechnoReferencial: Array<TechnoEntity>,
    setTechnosReferencial: React.Dispatch<React.SetStateAction<TechnoEntity[]>>,
    project: ProjectEntity,
  ) => void;
  technosReferencial: Array<TechnoEntity>;
}): JSX.Element {
  const [technosRef, setTechnosRef] =
    useState<Array<TechnoEntity>>(technosReferencial); // Will be fetch from the backend (Techno referenciel)

  technosReferencial.forEach((techno) => {
    if (project.technos.includes(techno.uuid)) {
      techno.active = true;
    }
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
        <h3 className="login_title">Titre (FR)</h3>
        <input
          type="text"
          name="title"
          defaultValue={project.FR.title}
          data-testid={`${project.uuid}_title`}
          onChange={(event) => handleProjectDataChange(event, project, "FR")}
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
        {technosReferencial.map((techno) => (
          <Techno
            key={techno.uuid}
            techno={techno}
            technosRef={technosRef}
            setTechnosRef={setTechnosRef}
            project={project}
            handleProjectTechnoClicked={handleProjectTechnoClicked}
          />
        ))}
      </div>
    </form>
  );
}

export default function ProjectsConfig({
  projects,
  handleAddProject,
  handleDeleteProject,
  handleProjectDataChange,
  handleProjectStatusChange,
  handleProjectTechnoClicked,
}: {
  projects: Array<ProjectEntity>;
  handleAddProject: MouseEventHandler<SVGElement>;
  handleDeleteProject: (project: ProjectEntity) => void;
  handleProjectDataChange: (
    event: ChangeEvent<HTMLInputElement>,
    project: ProjectEntity,
    language: "EN" | "FR",
  ) => void;
  handleProjectStatusChange: (
    event: ChangeEvent<HTMLSelectElement>,
    project: ProjectEntity,
  ) => void;
  handleProjectTechnoClicked: (
    technoClicked: TechnoEntity,
    technosReferencial: Array<TechnoEntity>,
    setTechnosReferencial: React.Dispatch<React.SetStateAction<TechnoEntity[]>>,
    project: ProjectEntity,
  ) => void;
}): JSX.Element {
  const technosReferencial = sliderTechnos; // Will be fetch from the backend (Techno referenciel)
  return (
    <div className="projects_config">
      <h2 className="section_title">Projects</h2>
      <section className="section projects">
        {projects.map((project) => (
          <Project
            key={project.uuid}
            project={project}
            deleteProject={handleDeleteProject}
            handleProjectDataChange={handleProjectDataChange}
            handleProjectStatusChange={handleProjectStatusChange}
            handleProjectTechnoClicked={handleProjectTechnoClicked}
            technosReferencial={technosReferencial}
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
