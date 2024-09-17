import { v4 as uuidv4 } from "uuid";

export class DevLanguage {
  _id: string = uuidv4();
  name: string = "";
  src: string = "";
  active?: boolean = false;
}
