import "../../../style/components/admin/ProjectsConfig.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { ProjectsConfigPropsI } from "../../../utils/interfaces/props";
import { Project } from "./Project";

export default function ProjectsConfig({
  projects,
  handleAddProject,
  handleDeleteProject,
  handleProjectDataChange,
  handleProjectStatusChange,
  handleProjectTechnoClicked,
}: ProjectsConfigPropsI): JSX.Element {
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
