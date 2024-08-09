import { v4 as uuidv4 } from "uuid";

export class Experience {
  uuid: string = uuidv4();
  status: string = "inactive";
  title: string = "";
  company: string = "";
  duration: string = "";
  responsibilities: string = "";
  start_date: string = "";
  end_date: string = "";
  [key: string]: string;
}
