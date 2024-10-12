import { ChangeEvent, MouseEventHandler } from "react";
import { Project } from "../../utils/entities/Project";
import { Techno } from "../../utils/entities/Techno";
import { AdminForm } from "../../utils/entities/AdminForm";
import { DevLanguage } from "../../utils/entities/DevLangague";
import { Experience } from "../entities/Experience";
import { Discipline } from "../entities/Discipline";
import { LanguageT } from "../types/general";

export interface AdminFormHooksI {
  adminFormContent: AdminForm;
  homeConfigHooksI: HomeConfigHooksI;
  projectHooksI: ProjectHooksI;
  projectsConfigHooksI: ProjectsConfigHooksI;
  aboutConfigHooksI: AboutConfigHooksI;
  buttonConfigHooksI: ButtonConfigHooksI;
}

export interface HomeConfigHooksI {
  handleHomeDataChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    language: LanguageT,
  ) => void;
}

export interface ProjectHooksI {
  handleProjectStatusChange: (
    event: React.ChangeEvent<HTMLSelectElement>,
    currentProject: Project,
  ) => void;
  handleProjectTechnoClicked: (technoClicked: Techno, parent: Project) => void;
  handleProjectDataChangeWithLanguage: (
    event: React.ChangeEvent<HTMLInputElement>,
    currentProject: Project,
    language: LanguageT,
  ) => void;
  handleProjectDataChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    currentProject: Project,
  ) => void;
}

export interface ProjectsConfigHooksI {
  handleAddProject: MouseEventHandler<SVGElement>;
  handleDeleteProject: (project: Project) => void;
}

export interface AboutConfigHooksI {
  handleAboutDataOnChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    language: LanguageT,
  ) => void;
  handleAboutTechnoClicked: (technoClicked: Techno) => void;
  handleAboutDevLanguageClicked: (DevLanguageClicked: DevLanguage) => void;
  handleDisciplinesSelected: (disciplines: Array<string>) => void;
}
export interface ButtonConfigHooksI {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleReset: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface ReferencialsHooksI {
  technosRef: Array<Techno>;
  devLanguageRef: Array<DevLanguage>;
  disciplinesRef: Array<Discipline>;
  // Will be fetch from the backend
}
