import { v4 as uuidv4 } from "uuid";

export class AboutForm {
  uuid: string = uuidv4();
  title: string = "";
  description: string = "";
  technos: Array<string> = [];
  languages: Array<string> = [];
  disciplines: Array<string> = [];
}
