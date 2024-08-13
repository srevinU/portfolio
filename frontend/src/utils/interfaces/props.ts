import { ChangeEvent, ChangeEventHandler, MouseEventHandler } from "react";
import { Project } from "../../entities/Project";
import { Techno } from "../../entities/Techno";
import { AboutForm } from "../../entities/AboutForm";
import { DevLanguage } from "../../entities/DevLangague";

export interface ProjectsConfigPropsI {
  projects: Array<Project>;
  handleAddProject: MouseEventHandler<SVGElement>;
  handleDeleteProject: (project: Project) => void;
  handleProjectDataChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    project: Project,
    language: "EN" | "FR",
  ) => void;
  handleProjectStatusChange: (
    event: ChangeEvent<HTMLSelectElement>,
    project: Project,
  ) => void;
  handleProjectTechnoClicked: (
    technoClicked: Techno,
    technosReferencial: Array<Techno>,
    setTechnosReferencial: React.Dispatch<React.SetStateAction<Array<Techno>>>,
    parent: Project,
  ) => void;
}

export interface ProjectPropsI {
  project: Project;
  deleteProject: (project: Project) => void;
  handleProjectDataChange: (
    event: ChangeEvent<HTMLInputElement>,
    project: Project,
    language: "EN" | "FR",
  ) => void;
  handleProjectStatusChange: (
    event: ChangeEvent<HTMLSelectElement>,
    project: Project,
  ) => void;
  handleProjectTechnoClicked: (
    technoClicked: Techno,
    TechnoReferencial: Array<Techno>,
    setTechnosReferencial: React.Dispatch<React.SetStateAction<Array<Techno>>>,
    parent: Project,
  ) => void;
}

export interface ProjectTechnoPropsI {
  techno: Techno;
  parent: Project;
  handleProjectTechnoClicked: (
    technoClicked: Techno,
    TechnoReferencial: Array<Techno>,
    setTechnosReferencial: React.Dispatch<React.SetStateAction<Array<Techno>>>,
    parent: Project,
  ) => void;
  technosRef: Array<Techno>;
  setTechnosRef: React.Dispatch<React.SetStateAction<Array<Techno>>>;
}

export interface AboutTechnoPropsI {
  techno: Techno;
  parent: AboutForm;
  handleAboutTechnoClicked: (
    technoClicked: Techno,
    TechnoReferencial: Array<Techno>,
    setTechnosReferencial: React.Dispatch<React.SetStateAction<Array<Techno>>>,
    parent: AboutForm,
  ) => void;
  technosRef: Array<Techno>;
  setTechnosRef: React.Dispatch<React.SetStateAction<Array<Techno>>>;
}

export interface AboutDevLanguagePropsI {
  devLanguage: DevLanguage;
  parent: AboutForm;
  handleAboutDevLanguageClicked: (
    DevLanguageClicked: DevLanguage,
    devLanguageReferencial: Array<DevLanguage>,
    setDevLanguageReferencial: React.Dispatch<
      React.SetStateAction<Array<DevLanguage>>
    >,
    parent: AboutForm,
  ) => void;
  devLanguageRef: Array<DevLanguage>;
  setDevLanguageRef: React.Dispatch<React.SetStateAction<Array<DevLanguage>>>;
}

export interface AboutConfigPropsI {
  aboutContent: AboutForm;
  handleAboutDataOnChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  handleAboutTechnoClicked: (
    technoClicked: Techno,
    TechnoReferencial: Array<Techno>,
    setTechnosReferencial: React.Dispatch<React.SetStateAction<Array<Techno>>>,
    parent: AboutForm,
  ) => void;
  handleAboutDevLanguageClicked: (
    DevLanguageClicked: Techno,
    devLanguageReferencial: Array<Techno>,
    setTechnosReferencial: React.Dispatch<React.SetStateAction<Array<Techno>>>,
    parent: AboutForm,
  ) => void;
}
