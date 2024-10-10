import { v4 as uuidv4 } from "uuid";
export class Experience {
  _id: string;
  title: {
    EN: string;
    FR: string;
  };
  jobs: {
    EN: Array<{
      title: string;
      company: string;
      duration: string;
      responsibilities: string;
    }>;
    FR: Array<{
      title: string;
      company: string;
      duration: string;
      responsibilities: string;
    }>;
  };

  constructor() {
    this._id = uuidv4();
    this.title = { EN: "", FR: "" };
    this.jobs = {
      EN: [],
      FR: [],
    };
  }
}
