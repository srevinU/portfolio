import {
  sliderTechnos,
  Project as ProjectClass,
} from "../../utils/data/sliderProjects";
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
  project: ProjectT;
}): ProjectHooksI => {
  const [technos, setTechnos] = useState<TechnoT[]>(
    sliderTechnos.map((techno) => {
      return { ...techno, active: project.technos.includes(techno.uuid) };
    }),
  );

  const handleTechnoClicked = (technoClicked: TechnoT): void => {
    technoClicked.active = !technoClicked.active;
    if (technoClicked.active) {
      project.technos.push(technoClicked.uuid);
    } else {
      project.technos = project.technos.filter((t) => t !== technoClicked.uuid);
    }
    setTechnos(
      technos.map((techno) => {
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
  projects: Array<ProjectT>,
  setProjects: Function,
): ProjectsConfigHooksI => {
  const handleAddProject = (): void => {
    setProjects([...projects, new ProjectClass()]);
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
