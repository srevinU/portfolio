import { SliderProjectsT } from "../types/SliderProjects";

export const sliderProjects: SliderProjectsT = [
  {
    key: "1",
    dataTestId: "project_1",
    index: 0,
    href: "/maintenance",
    EN: {
      label_link: "View Project",
      title: "Netflix Clone",
    },
    FR: {
      label_link: "Voir Projet",
      title: "Amazon Clone",
    },
    src: "/assets/projects/netflix.png",
    technos: [
      {
        key: "1",
        index: 0,
        name: "React",
        src: "/assets/logos/react.svg",
        dataTestId: "1",
      },
      {
        key: "2",
        index: 1,
        name: "Node.js",
        src: "/assets/logos/nodejs.svg",
        dataTestId: "2",
      },
      {
        key: "3",
        index: 2,
        name: "TypeScript",
        src: "/assets/logos/typescript.svg",
        dataTestId: "3",
      },
    ],
  },
  {
    key: "2",
    dataTestId: "project_2",
    index: 1,
    href: "/maintenance",
    EN: {
      label_link: "View Project",
      title: "Amazon Clone",
    },
    FR: {
      label_link: "Voir Projet",
      title: "Amazon Clone",
    },
    src: "/assets/projects/amazon.png",
    technos: [
      {
        key: "4",
        index: 0,
        name: "Vue.js",
        src: "/assets/logos/vuejs.svg",
        dataTestId: "4",
      },
      {
        key: "5",
        index: 1,
        name: "Node.js",
        src: "/assets/logos/nodejs.svg",
        dataTestId: "5",
      },
    ],
  },
];
