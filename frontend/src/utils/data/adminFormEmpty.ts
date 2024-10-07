import { AdminForm } from "../entities/AdminForm";

const adminFormContentEmpty: AdminForm = {
  _id: "26627210-c7ea-49c4-9432-f1b33d895240",
  home: {
    EN: {
      title: "",
      subtitle: "",
    },
    FR: {
      title: "",
      subtitle: "",
    },
  },
  about: {
    EN: {
      title: "",
      description: "",
    },
    FR: {
      title: "",
      description: "",
    },
    technos: [],
    languages: [],
    disciplines: [],
    experiences: {
      EN: {
        title: "",
        jobs: [],
      },
      FR: {
        title: "",
        jobs: [],
      },
    },
  },
  experiences: [],
  projects: [],
};

export default adminFormContentEmpty;
