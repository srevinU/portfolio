import { AboutContentsT } from "../types/AboutContent";

export const aboutContent: AboutContentsT = {
  EN: {
    details: {
      title: "Developer Fullstack NodeJS",
      description:
        "I am a developer with a passion for creating applications. I have experience in developing applications using NodeJS, ReactJS, and MongoDB. I am always looking for new challenges and opportunities to learn new technologies.",
    },
    experiences: {
      title: "Work Experiences",
      jobs: [
        {
          title: "Fullstack Developer",
          company: "Airbus",
          duration: "2021 - 2023",
          responsibilities:
            "Developed an application using: \n\n\t NodeJS, Typescript, VueJS, Mysql, Redis, Docker, Jenkins and AWS",
        },
        {
          title: "Junior Developer",
          company: "Airbus",
          duration: "2019 - 2021",
          responsibilities:
            "Developed an application using: \n\n\t ReactJS, ServiceNow as back-office, Mysql, Redis, Docker, Jenkins and AWS",
        },
      ],
    },
    disciplines: {
      title: "Disciplines",
      list: [
        "Frontend Development",
        "Backend Development",
        "Database Management",
        "Devops Development",
      ],
    },
    technologies: {
      title: "Technos",
      list: [
        "react",
        "vuejs",
        "nodejs",
        "docker",
        "mysql",
        "redis",
        "jenkins",
        "aws",
      ],
    },
    languages: {
      title: "Languages",
      list: ["typescript", "javascript", "html", "css", "python", "bash"],
    },
  },
  FR: {
    details: {
      title: "Développeur NodeJS",
      description:
        "Je suis un développeur passionné par la création d'applications web. J'ai de l'expérience dans le développement d'applications utilisant NodeJS, ReactJS et MongoDB. Je suis toujours à la recherche de nouveaux défis et d'opportunités pour apprendre de nouvelles technologies.",
    },
    experiences: {
      title: "Expériences de travail",
      jobs: [
        {
          title: "Fullstack Developer",
          company: "Airbus",
          duration: "2021 - 2023",
          responsibilities:
            "Développement d'une application en utilisant: \n\n\t NodeJS, Typescript, VueJS, Mysql, Redis, Docker, Jenkins and AWS",
        },
        {
          title: "Junior Developer",
          company: "Airbus",
          duration: "2019 - 2021",
          responsibilities:
            "Développement d'une applications en utilisant:\n\n\t ReactJS, ServiceNow as back-office, Mysql, Redis, Docker, Jenkins and AWS",
        },
      ],
    },
    disciplines: {
      title: "Disciplines",
      list: [
        "Développement Frontend",
        "Développement Backend",
        "Gestion de base de données",
        "Développement Devops",
      ],
    },
    technologies: {
      title: "Technos",
      list: [
        "react",
        "vuejs",
        "nodejs",
        "docker",
        "mysql",
        "redis",
        "jenkins",
        "aws",
      ],
    },
    languages: {
      title: "Langages",
      list: ["typescript", "javascript", "html", "css", "python", "bash"],
    },
  },
};

export const devLanguages = [
  {
    uuid: "2f2dc42d-b951-446c-85e4-7436ba03f4c5",
    name: "typescript",
    src: "/assets/typescript.svg",
  },
  {
    uuid: "de3233a3-3134-4215-9d3c-921ddcce86c2",
    name: "javascript",
    src: "/assets/javascript.svg",
  },
  {
    uuid: "e1233d0b-0db7-44e8-a8f0-9245e03d5330",
    name: "html",
    src: "/assets/html.svg",
  },
  {
    uuid: "0fd63c52-8a17-4b00-b7f8-7e809ff14985",
    name: "css",
    src: "/assets/css.svg",
  },
  {
    uuid: "d850c1dd-681a-4264-a826-51a477190c29",
    name: "python",
    src: "/assets/python.svg",
  },
  {
    uuid: "4bb9a07c-79bc-430a-bd8e-b241292efbb3",
    name: "bash",
    src: "/assets/bash.svg",
  },
];
