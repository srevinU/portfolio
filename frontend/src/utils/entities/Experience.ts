export class Experience {
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
    this.title = { EN: "", FR: "" };
    this.jobs = {
      EN: [],
      FR: [],
    };
  }
}
