import { TechnoT } from "../types/SliderProjects";
import { DevLanguage } from "./DevLangague";

export class AboutForm {
  EN: { title: string; description: string };
  FR: { title: string; description: string };
  experiences: {
    EN: {
      title: string;
      jobs: Array<{
        title: string;
        company: string;
        duration: string;
        responsibilities: string;
      }>;
    };
    FR: {
      title: string;
      jobs: Array<{
        title: string;
        company: string;
        duration: string;
        responsibilities: string;
      }>;
    };
  };
  technos: Array<TechnoT> = [];
  languages: Array<DevLanguage> = [];
  disciplines: Array<string> = [];

  constructor() {
    this.EN = { title: "", description: "" };
    this.FR = { title: "", description: "" };
    this.experiences = {
      EN: { title: "", jobs: [] },
      FR: { title: "", jobs: [] },
    };
  }
}
