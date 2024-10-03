import { Techno } from "../../utils/entities/Techno";
import { Project } from "../entities/Project";

export const sliderProjects: Array<Project> = [
  {
    _id: "d188dee8-66c8-42ca-a291-4b5dfd5e5515",
    href: "/maintenance",
    EN: {
      label_link: "url",
      title: "title",
    },
    FR: {
      label_link: "lien",
      title: "titre",
    },
    src: "/assets/netflix.png",
    technos: ["666aa4d0-9821-46e8-898b-1989bc7e9602"],
  },
  // {
  //   _id: "345cde73-cd88-4826-bcae-a8cacfd1d06a",
  //   href: "/maintenance",
  //   EN: {
  //     label_link: "url",
  //     title: "title",
  //   },
  //   FR: {
  //     label_link: "lien",
  //     title: "titre",
  //   },
  //   src: "/assets/amazon.png",
  //   technos: [
  //     "7e6f0cdf-4d96-46a4-ac14-5a8023aea0e4",
  //     "6b81c392-7b83-49a8-a33c-9dbc0b64882f",
  //   ],
  // },
];

export const sliderTechnos: Array<Techno> = [
  {
    _id: "66cc9e78443e8b90b73b494e",
    name: "React",
    src: "/assets/react.svg",
  },
  {
    _id: "66cca35706e2b2135b778da8",
    name: "Node.js",
    src: "/assets/nodejs.svg",
  },
  {
    _id: "66cf44e4c4f8cb488afe2b58",
    name: "TypeScript",
    src: "/assets/typescript.svg",
  },
  {
    _id: "66fe4b8de8174dcb67e4dcb5",
    name: "Vue.js",
    src: "/assets/vuejs.svg",
  },
  {
    _id: "66fe4b9ae8174dcb67e4dcba",
    name: "Docker",
    src: "/assets/docker.svg",
  },
  {
    _id: "66fe4ba3e8174dcb67e4dcbf",
    name: "Mysql",
    src: "/assets/mysql.svg",
  },
  {
    _id: "66fe4bb4e8174dcb67e4dcc4",
    name: "Redis",
    src: "/assets/redis.svg",
  },
  {
    _id: "66fe4bbde8174dcb67e4dcc9",
    name: "Jenkins",
    src: "/assets/jenkins.svg",
  },
  {
    _id: "66fe4bc6e8174dcb67e4dcce",
    name: "AWS",
    src: "/assets/aws.svg",
  },
];
