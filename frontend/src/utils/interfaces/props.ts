import { ChangeEvent, MouseEventHandler } from "react";
import { Project } from "../../utils/entities/Project";
import { Techno } from "../../utils/entities/Techno";
import { AboutForm } from "../../utils/entities/AboutForm";
import { DevLanguage } from "../../utils/entities/DevLangague";
import { LanguageT } from "../types/general";

export interface ProjectsConfigPropsI {
  projects: Array<Project>;
  handleAddProject: MouseEventHandler<SVGElement>;
  handleDeleteProject: (project: Project) => void;
  handleProjectDataChangeWithLanguage: (
    event: React.ChangeEvent<HTMLInputElement>,
    project: Project,
    language: LanguageT,
  ) => void;
  handleProjectDataChange: (
    event: ChangeEvent<HTMLInputElement>,
    project: Project,
  ) => void;
  handleProjectStatusChange: (
    event: ChangeEvent<HTMLSelectElement>,
    project: Project,
  ) => void;
  handleProjectTechnoClicked: (technoClicked: Techno, parent: Project) => void;
}

export interface ProjectPropsI {
  project: Project;
  deleteProject: (project: Project) => void;
  handleProjectDataChangeWithLanguage: (
    event: ChangeEvent<HTMLInputElement>,
    project: Project,
    language: LanguageT,
  ) => void;
  handleProjectDataChange: (
    event: ChangeEvent<HTMLInputElement>,
    project: Project,
  ) => void;
  handleProjectStatusChange: (
    event: ChangeEvent<HTMLSelectElement>,
    project: Project,
  ) => void;
  handleProjectTechnoClicked: (technoClicked: Techno, parent: Project) => void;
}

export interface ProjectTechnoPropsI {
  parent: Project;
  techno: Techno;
  handleProjectTechnoClicked: (technoClicked: Techno, parent: Project) => void;
}

export interface AboutTechnoPropsI {
  techno: Techno;
  parent: AboutForm;
  handleAboutTechnoClicked: (technoClicked: Techno) => void;
}

export interface AboutDevLanguagePropsI {
  parent: AboutForm;
  devLanguage: DevLanguage;
  handleAboutDevLanguageClicked: (DevLanguageClicked: DevLanguage) => void;
}

export interface AboutConfigPropsI {
  aboutContent: AboutForm;
  handleAboutDataOnChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    language: LanguageT,
  ) => void;
  handleAboutTechnoClicked: (technoClicked: Techno) => void;
  handleAboutDevLanguageClicked: (devLanguageClicked: DevLanguage) => void;
  handleDisciplinesSelected: (disciplines: Array<string>) => void;
}
