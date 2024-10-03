import { v4 as uuidv4 } from "uuid";

export class Project {
  _id: string = uuidv4();
  src: string = "";
  technos: Array<string> = [];
  href: string = "";
  FR: { label_link: string; title: string } = {
    label_link: "Voir projet",
    title: "",
  };
  EN: { label_link: string; title: string } = {
    label_link: "View project",
    title: "",
  };
  status?: string = "inactive";
  [key: string]: any;
}
