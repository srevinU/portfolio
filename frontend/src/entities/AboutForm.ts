import { v4 as uuidv4 } from "uuid";

export class AboutForm {
  uuid: string = uuidv4();
  title: string = "";
  description: string = "";
  technos: string[] = [];
  languages: string[] = [];
  disciplines: any[] = [];
  [key: string]: any;
}
