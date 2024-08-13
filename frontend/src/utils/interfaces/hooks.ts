import { ChangeEventHandler, MouseEventHandler } from "react";
import { Project } from "../../entities/Project";
import { Techno } from "../../entities/Techno";
import { AdminForm } from "../../entities/AdminForm";
import { AboutForm } from "../../entities/AboutForm";
import { DevLanguage } from "../../entities/DevLangague";

export interface AdminFormHooksI {
  adminFormContent: AdminForm;
  HomeConfigHooksI: HomeConfigHooksI;
  ProjectHooksI: ProjectHooksI;
  ProjectsConfigHooksI: ProjectsConfigHooksI;
  AboutConfigHooksI: AboutConfigHooksI;
  // ExperienceConfigHooksI: ExperienceConfigHooksI;
  // ExperienceHooksI: ExperienceHooksI;
  ButtonConfigHooksI: ButtonConfigHooksI;
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
    DevLanguageClicked: DevLanguage,
    devLanguageReferencial: Array<DevLanguage>,
    setTechnosReferencial: React.Dispatch<
      React.SetStateAction<Array<DevLanguage>>
    >,
  ) => void;
}

export interface ExperienceConfigHooksI {
  handleAddEperience: MouseEventHandler<SVGElement>;
  handleDeleteExperience: Function;
}

export interface ExperienceHooksI {
  handleValueChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
}

export interface ButtonConfigHooksI {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleReset: (e: React.FormEvent<HTMLFormElement>) => void;
}
