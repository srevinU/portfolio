import { AdminForm } from "../../entities/AdminForm";
import { Project as ProjectEntity } from "../../entities/Project";
import { Techno as TechnoEntity } from "../../entities/Techno";
import { ProjectT } from "../../utils/types/SliderProjects";
import React, { MouseEventHandler } from "react";

interface ProjectHooksI {
  handleProjectStatusChange: (
    event: React.ChangeEvent<HTMLSelectElement>,
    currentProject: ProjectEntity,
  ) => void;
  handleProjectTechnoClicked: (
    technoClicked: TechnoEntity,
    technosReferencial: Array<TechnoEntity>,
    setTechnosReferencial: React.Dispatch<React.SetStateAction<TechnoEntity[]>>,
    project: ProjectEntity,
  ) => void;
  handleProjectDataChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    currentProject: ProjectEntity,
    language: "EN" | "FR",
  ) => void;
}

export const useProjectHooks = ({
  adminFormContent,
  setAdminFormContent,
}: {
  adminFormContent: AdminForm;
  setAdminFormContent: React.Dispatch<React.SetStateAction<AdminForm>>;
}): ProjectHooksI => {
  const handleProjectTechnoClicked = (
    technoClicked: TechnoEntity,
    technosReferencial: Array<TechnoEntity>,
    setTechnosReferencial: React.Dispatch<React.SetStateAction<TechnoEntity[]>>,
    project: ProjectEntity,
  ): void => {
    technoClicked.active = !technoClicked.active;
    if (technoClicked.active) {
      project.technos.push(technoClicked.uuid);
    } else {
      project.technos = project.technos.filter(
        (techno) => techno !== technoClicked.uuid,
      );
    }
    setTechnosReferencial(
      technosReferencial.map((techno: TechnoEntity) => {
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

interface ProjectsConfigHooksI {
  handleAddProject: MouseEventHandler<SVGElement>;
  handleDeleteProject: (project: ProjectEntity) => void;
}

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
