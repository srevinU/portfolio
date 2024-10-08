import { v4 as uuidv4 } from "uuid";
import { Project } from "./Project";
import { HomeForm } from "./HomeForm";
import { AboutForm } from "./AboutForm";
import { Experience } from "./Experience";

export class AdminForm {
  _id: string;
  home: HomeForm;
  about: AboutForm;
  experiences: Experience;
  projects: Array<Project>;

  constructor() {
    this._id = uuidv4();
    this.home = new HomeForm();
    this.about = new AboutForm();
    this.experiences = new Experience();
    this.projects = [];
  }
}
