import { Project as ProjectEntity } from "../../entities/Project";
import { Techno as TechnoEntity } from "../../entities/Techno";
import { sliderTechnos } from "../../utils/data/sliderProjects";
import { ProjectT, TechnoT } from "../../utils/types/SliderProjects";
import { MouseEventHandler, useState } from "react";

interface ProjectHooksI {
  handleStatusChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleTechnoClicked: (technoClicked: TechnoT) => void;
  technos: TechnoT[];
}

interface ProjectsConfigHooksI {
  handleAddProject: MouseEventHandler<SVGElement>;
  handleDeleteProject: Function;
}

export const useProjectHooks = ({
  project,
}: {
  project: ProjectEntity;
}): ProjectHooksI => {
  const [technos, setTechnos] = useState<Array<TechnoEntity>>(
    sliderTechnos.map((techno) => {
      return { ...techno, active: project.technos.includes(techno.uuid) };
    }),
  );

  const handleTechnoClicked = (technoClicked: TechnoEntity): void => {
    technoClicked.active = !technoClicked.active;
    if (technoClicked.active) {
      project.technos.push(technoClicked.uuid);
    } else {
      project.technos = project.technos.filter((t) => t !== technoClicked.uuid);
    }
    setTechnos(
      technos.map((techno: TechnoEntity) => {
        if (techno.uuid === technoClicked.uuid) {
          return { ...techno, active: technoClicked.active };
        }
        return techno;
      }),
    );
  };

  const handleStatusChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    project.status = e.target.value;
  };

  return {
    handleStatusChange,
    handleTechnoClicked,
    technos,
  };
};

export const useProjectsConfigHooks = (
  projects: Array<ProjectEntity>,
  setProjects: Function,
): ProjectsConfigHooksI => {
  const handleAddProject = (): void => {
    setProjects([...projects, new ProjectEntity()]);
  };

  const handleDeleteProject = (projectToDelete: ProjectT): void => {
    setProjects(
      projects.filter((project) => project.uuid !== projectToDelete.uuid),
    );
  };

  return {
    handleAddProject,
    handleDeleteProject,
  };
};
