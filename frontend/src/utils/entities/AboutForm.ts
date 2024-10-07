import { TechnoT } from "../types/SliderProjects";
import { DevLanguage } from "./DevLangague";

export class AboutForm {
  EN: { title: string; description: string } = { title: "", description: "" };
  FR: { title: string; description: string } = { title: "", description: "" };
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
  } = {
    EN: { title: "", jobs: [] },
    FR: { title: "", jobs: [] },
  };
  technos: Array<TechnoT> = [];
  languages: Array<DevLanguage> = [];
  disciplines: Array<string> = [];
}
