import { v4 as uuidv4 } from "uuid";

export class Discipline {
  uuid: string;
  value: string;
  label: string;

  constructor() {
    this.uuid = uuidv4();
    this.value = "";
    this.label = "";
  }
}
