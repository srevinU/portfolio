import { v4 as uuidv4 } from "uuid";

export class AboutForm {
  uuid: string = uuidv4();
  EN: { title: string; description: string } = { title: "", description: "" };
  FR: { title: string; description: string } = { title: "", description: "" };
  technos: Array<string> = [];
  languages: Array<string> = [];
  disciplines: Array<string> = [];
}
