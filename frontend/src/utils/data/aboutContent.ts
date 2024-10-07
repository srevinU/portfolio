import { AboutContentT } from "../types/AboutContent";

export const aboutContent: AboutContentT = {
  FR: {
    title: "Développeur NodeJS",
    description:
      "Je suis un développeur passionné par la création d'applications web. J'ai de l'expérience dans le développement d'applications utilisant NodeJS, ReactJS et MongoDB. Je suis toujours à la recherche de nouveaux défis et d'opportunités pour apprendre de nouvelles technologies.",
  },
  EN: {
    title: "Developer Fullstack NodeJS",
    description:
      "I am a developer with a passion for creating applications. I have experience in developing applications using NodeJS, ReactJS, and MongoDB. I am always looking for new challenges and opportunities to learn new technologies.",
  },
  experiences: {
    EN: {
      title: "Work Experiences",
      jobs: [
        {
          title: "Fullstack Developer",
          company: "Airbus",
          duration: "2021 - 2023",
          responsibilities:
            "Development of an application using: NodeJS, Typescript, VueJS, Mysql, Redis, Docker, Jenkins and AWS",
        },
        {
          title: "Junior Developer",
          company: "Airbus",
          duration: "2019 - 2021",
          responsibilities:
            "Development of an application using: ReactJS, ServiceNow as back-office, Mysql, Redis, Docker, Jenkins and AWS",
        },
      ],
    },
    FR: {
      title: "Expériences de travail",
      jobs: [
        {
          title: "Fullstack Developer",
          company: "Airbus",
          duration: "2021 - 2023",
          responsibilities:
            "Développement d'une application en utilisant: NodeJS, Typescript, VueJS, Mysql, Redis, Docker, Jenkins and AWS",
        },
        {
          title: "Junior Developer",
          company: "Airbus",
          duration: "2019 - 2021",
          responsibilities:
            "Développement d'une application en utilisant: ReactJS, ServiceNow as back-office, Mysql, Redis, Docker, Jenkins and AWS",
        },
      ],
    },
  },
  technos: [
    {
      name: "React",
      src: "/assets/react.svg",
    },
    {
      name: "Node",
      src: "/assets/nodejs.svg",
    },
  ],
  languages: [
    {
      name: "typescript",
      src: "/assets/typescript.svg",
    },
    {
      name: "bash",
      src: "/assets/bash.svg",
    },
    {
      name: "css",
      src: "/assets/css.svg",
    },
  ],
  disciplines: ["backend"],
};
