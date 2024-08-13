import { AdminForm } from "../../entities/AdminForm";
import { Project as ProjectEntity } from "../../entities/Project";
import { Techno } from "../../entities/Techno";
import {
  ProjectHooksI,
  ProjectsConfigHooksI,
} from "../../utils/interfaces/hooks";
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
    technosReferencial: Array<Techno>,
    setTechnosReferencial: React.Dispatch<React.SetStateAction<Array<Techno>>>,
    project: ProjectEntity,
  ): void => {
    technoClicked.active = !technoClicked.active;
    if (technoClicked.active) {
      project.technos.push(technoClicked.uuid);
    } else {
      project.technos = project.technos.filter(
        (technoId: string) => technoId !== technoClicked.uuid,
      );
    }
    setTechnosReferencial(
      technosReferencial.map((techno: Techno) => {
        if (techno.uuid === technoClicked.uuid) {
          return { ...techno, active: technoClicked.active };
        }
        return techno;
      }),
    );
    setAdminFormContent(adminFormContent);
  };

  const handleProjectDataChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    currentProject: ProjectEntity,
    language: "EN" | "FR",
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
