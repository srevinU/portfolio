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
    const isActive = (id: string, array: Array<any>) => {
      return array.some((obj) => obj._id === id);
    };
    const projectsUpdated = adminFormContent.projects.map(
      (project: ProjectEntity) => {
        if (project._id === parent._id) {
          if (isActive(technoClicked._id, parent.technos)) {
            parent.technos = parent.technos.filter(
              (techno: any) => techno._id !== technoClicked._id,
            );
          } else {
            parent.technos.push(technoClicked as any);
          }
        }
        console.log("Project updated", project);
        return project;
      },
    );
    setAdminFormContent({
      ...adminFormContent,
      ...adminFormContent.projects,
      projects: projectsUpdated,
    });
  };

  const handleProjectDataChangeWithLanguage = (
    event: React.ChangeEvent<HTMLInputElement>,
    currentProject: ProjectEntity,
    language: LanguageT,
  ): void => {
    adminFormContent.projects = adminFormContent.projects.map(
      (project: ProjectEntity) => {
        if (project._id === currentProject._id) {
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

  const handleProjectDataChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    currentProject: ProjectEntity,
  ): void => {
    adminFormContent.projects = adminFormContent.projects.map(
      (project: ProjectEntity) => {
        if (project._id === currentProject._id) {
          currentProject[event.target.name] = event.target.value;
        }
        return project;
      },
    );
    setAdminFormContent(adminFormContent);
  };

  const handleProjectStatusChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    currentProject: ProjectEntity,
  ): void => {
    adminFormContent.projects = adminFormContent.projects.map(
      (project: ProjectEntity) => {
        if (project._id === currentProject._id) {
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
    handleProjectDataChangeWithLanguage,
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
        (project) => project._id !== projectToDelete._id,
      ),
    });
  };

  return {
    handleAddProject,
    handleDeleteProject,
  };
};
