import { v4 as uuidv4 } from "uuid";

export class Project {
  _id: string;
  src: string = "";
  technos: Array<string>;
  href: string = "";
  FR: { label_link: string; title: string };
  EN: { label_link: string; title: string };
  status?: string;

  constructor() {
    this._id = uuidv4();
    this.FR = { label_link: "Voir projet", title: "" };
    this.EN = { label_link: "View project", title: "" };
    this.technos = [];
    this.status = "inactive";
  }
  [key: string]: any;
}
