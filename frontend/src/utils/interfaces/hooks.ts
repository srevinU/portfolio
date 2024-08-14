import { ChangeEvent, ChangeEventHandler, MouseEventHandler } from "react";
import { Project } from "../../utils/entities/Project";
import { Techno } from "../../utils/entities/Techno";
import { AdminForm } from "../../utils/entities/AdminForm";
import { AboutForm } from "../../utils/entities/AboutForm";
import { DevLanguage } from "../../utils/entities/DevLangague";
import { Experience } from "../entities/Experience";

export interface AdminFormHooksI {
  adminFormContent: AdminForm;
  homeConfigHooksI: HomeConfigHooksI;
  projectHooksI: ProjectHooksI;
  projectsConfigHooksI: ProjectsConfigHooksI;
  aboutConfigHooksI: AboutConfigHooksI;
  experiencesConfigHooksI: ExperienceConfigHooksI;
  experienceHooksI: ExperienceHooksI;
  buttonConfigHooksI: ButtonConfigHooksI;
}

export interface HomeConfigHooksI {
  handleHomeDataChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    language: "EN" | "FR",
  ) => void;
}

export interface ProjectHooksI {
  handleProjectStatusChange: (
    event: React.ChangeEvent<HTMLSelectElement>,
    currentProject: Project,
  ) => void;
  handleProjectTechnoClicked: (
    technoClicked: Techno,
    technosReferencial: Array<Techno>,
    setTechnosReferencial: React.Dispatch<React.SetStateAction<Array<Techno>>>,
    parent: Project,
  ) => void;
  handleProjectDataChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    currentProject: Project,
    language: "EN" | "FR",
  ) => void;
}

export interface ProjectsConfigHooksI {
  handleAddProject: MouseEventHandler<SVGElement>;
  handleDeleteProject: (project: Project) => void;
}

export interface AboutConfigHooksI {
  handleAboutDataOnChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    language: "EN" | "FR",
  ) => void;
  handleAboutTechnoClicked: (
    technoClicked: Techno,
    TechnoReferencial: Array<Techno>,
    setTechnosReferencial: React.Dispatch<React.SetStateAction<Array<Techno>>>,
    parent: AboutForm,
  ) => void;
  handleAboutDevLanguageClicked: (
    DevLanguageClicked: DevLanguage,
    devLanguageReferencial: Array<DevLanguage>,
    setTechnosReferencial: React.Dispatch<
      React.SetStateAction<Array<DevLanguage>>
    >,
  ) => void;
}

export interface ExperienceConfigHooksI {
  handleAddEperience: MouseEventHandler<SVGElement>;
  handleDeleteExperience: (experience: Experience) => void;
}

export interface ExperienceHooksI {
  handleExperienceValueChange: (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    currentExperience: Experience,
  ) => void;
}

export interface ButtonConfigHooksI {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleReset: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface ReferencialsHooksI {
  technosRef: Array<Techno>;
  setTechnosRef: React.Dispatch<React.SetStateAction<Array<Techno>>>;
  devLanguageRef: Array<DevLanguage>;
  setDevLanguageRef: React.Dispatch<React.SetStateAction<Array<DevLanguage>>>;
}
