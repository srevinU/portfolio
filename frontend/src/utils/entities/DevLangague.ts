import { v4 as uuidv4 } from "uuid";

export class DevLanguage {
  _id: string;
  name: string;
  src: string;
  active?: boolean;

  constructor(name: string, src: string) {
    this._id = uuidv4();
    this.name = name;
    this.src = src;
    this.active = false;
  }
}
