import { v4 as uuidv4 } from "uuid";
import { Project } from "./Project";
import { HomeForm } from "./HomeForm";
import { AboutForm } from "./AboutForm";
import { ExperienceT } from "../types/Experience";

export class AdminForm {
  _id: string;
  home: HomeForm;
  about: AboutForm;
  experiences: Array<ExperienceT>;
  projects: Array<Project>;

  constructor() {
    this._id = uuidv4();
    this.home = new HomeForm();
    this.about = new AboutForm();
    this.experiences = [];
    this.projects = [];
  }
}
