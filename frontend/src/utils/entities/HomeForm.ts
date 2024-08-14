import { v4 as uuidv4 } from "uuid";

export class HomeForm {
  uuid: string = uuidv4();
  EN: { title: string; subtitle: string } = { title: "", subtitle: "" };
  FR: { title: string; subtitle: string } = { title: "", subtitle: "" };
}
