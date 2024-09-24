import { v4 as uuidv4 } from "uuid";

export class Techno {
  uuid: string = uuidv4();
  name: string = "";
  src: string = "";
  active?: boolean = false;
}
