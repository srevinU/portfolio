import { SliderProjectsT } from "../types/SliderProjects";

export const sliderProjects: SliderProjectsT = [
  {
    key: "1",
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
      { key: "1", index: 0, name: "React", src: "/assets/logos/react.svg" },
      {
        key: "2",
        index: 1,
        name: "Node.js",
        src: "/assets/logos/nodejs.svg",
      },
      {
        key: "3",
        index: 2,
        name: "TypeScript",
        src: "/assets/logos/typescript.svg",
      },
    ],
  },
  {
    key: "2",
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
      },
      {
        key: "5",
        index: 1,
        name: "Node.js",
        src: "/assets/logos/nodejs.svg",
      },
    ],
  },
];
