import { v4 as uuidv4 } from "uuid";
import { Project } from "./Project";
import { HomeForm } from "./HomeForm";
import { AboutForm } from "./AboutForm";
import { ExperienceT } from "../types/Experience";

export class AdminForm {
  _id: string = uuidv4();
  home: HomeForm = new HomeForm();
  about: AboutForm = new AboutForm();
  experiences: Array<ExperienceT> = [];
  projects: Array<Project> = [];
}
