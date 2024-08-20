import { AdminForm } from "../../utils/entities/AdminForm";
import {
  Project,
  Project as ProjectEntity,
} from "../../utils/entities/Project";
import { Techno } from "../../utils/entities/Techno";
import {
  ProjectHooksI,
  ProjectsConfigHooksI,
} from "../../utils/interfaces/hooks";
import { LanguageT } from "../../utils/types/general";
import { ProjectT } from "../../utils/types/SliderProjects";
import React from "react";

export const useProjectHooks = ({
  adminFormContent,
  setAdminFormContent,
}: {
  adminFormContent: AdminForm;
  setAdminFormContent: React.Dispatch<React.SetStateAction<AdminForm>>;
}): ProjectHooksI => {
  const handleProjectTechnoClicked = (
    technoClicked: Techno,
    parent: Project,
  ): void => {
    const projectsUpdated = adminFormContent.projects.map(
      (project: ProjectEntity) => {
        if (project.uuid === parent.uuid) {
          if (project.technos.includes(technoClicked.uuid)) {
            parent.technos = parent.technos.filter(
              (technoId: string) => technoId !== technoClicked.uuid,
            );
          } else {
            parent.technos.push(technoClicked.uuid);
          }
        }
        return project;
      },
    );
    setAdminFormContent({
      ...adminFormContent,
      projects: projectsUpdated,
    });
  };

  const handleProjectDataChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    currentProject: ProjectEntity,
    language: LanguageT,
  ): void => {
    adminFormContent.projects = adminFormContent.projects.map(
      (project: ProjectEntity) => {
        if (project.uuid === currentProject.uuid) {
          project[language] = {
            ...project[language],
            [event.target.name]: event.target.value,
          };
        }
        return project;
      },
    );
    adminFormContent.projects = [...adminFormContent.projects];
    setAdminFormContent(adminFormContent);
  };

  const handleProjectStatusChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    currentProject: ProjectEntity,
  ): void => {
    adminFormContent.projects = adminFormContent.projects.map(
      (project: ProjectEntity) => {
        if (project.uuid === currentProject.uuid) {
          currentProject.status = event.target.value;
        }
        return project;
      },
    );
    setAdminFormContent(adminFormContent);
  };

  return {
    handleProjectStatusChange,
    handleProjectTechnoClicked,
    handleProjectDataChange,
  };
};

export const useProjectsConfigHooks = ({
  adminFormContent,
  setAdminFormContent,
}: {
  adminFormContent: AdminForm;
  setAdminFormContent: React.Dispatch<React.SetStateAction<AdminForm>>;
}): ProjectsConfigHooksI => {
  const handleAddProject = (): void => {
    setAdminFormContent({
      ...adminFormContent,
      projects: [...adminFormContent.projects, new ProjectEntity()],
    });
  };

  const handleDeleteProject = (projectToDelete: ProjectT): void => {
    setAdminFormContent({
      ...adminFormContent,
      projects: adminFormContent.projects.filter(
        (project) => project.uuid !== projectToDelete.uuid,
      ),
    });
  };

  return {
    handleAddProject,
    handleDeleteProject,
  };
};
