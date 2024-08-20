import { Techno } from "../../utils/entities/Techno";
import { SliderProjectsT } from "../types/SliderProjects";

export const sliderProjects: SliderProjectsT = [
  {
    uuid: "d188dee8-66c8-42ca-a291-4b5dfd5e5515",
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
  {
    uuid: "345cde73-cd88-4826-bcae-a8cacfd1d06a",
    href: "/maintenance",
    EN: {
      label_link: "url",
      title: "title",
    },
    FR: {
      label_link: "lien",
      title: "titre",
    },
    src: "/assets/amazon.png",
    technos: [
      "7e6f0cdf-4d96-46a4-ac14-5a8023aea0e4",
      "6b81c392-7b83-49a8-a33c-9dbc0b64882f",
    ],
  },
];

export const sliderTechnos: Array<Techno> = [
  {
    uuid: "6565b3f4-a15d-459c-9c8a-e72070ccc865",
    name: "React",
    src: "/assets/react.svg",
  },
  {
    uuid: "6cb9e514-1dde-425d-99ea-11a1e3ec3cbf",
    name: "Node.js",
    src: "/assets/nodejs.svg",
  },
  {
    uuid: "d06fc304-74e2-4263-b111-9884dfbb8be0",
    name: "TypeScript",
    src: "/assets/typescript.svg",
  },
  {
    uuid: "7e6f0cdf-4d96-46a4-ac14-5a8023aea0e4",
    name: "Vue.js",
    src: "/assets/vuejs.svg",
  },
  {
    uuid: "6b81c392-7b83-49a8-a33c-9dbc0b64882f",
    name: "Docker",
    src: "/assets/docker.svg",
  },
  {
    uuid: "c7e1cb13-3857-40ea-b30c-cd01488a0b32",
    name: "Mysql",
    src: "/assets/mysql.svg",
  },
  {
    uuid: "1eb3877a-ec89-40f9-9ffa-22444afbe8fe",
    name: "Redis",
    src: "/assets/redis.svg",
  },
  {
    uuid: "33c115bd-e8b6-43b1-bd4b-a19dd4486c7a",
    name: "Jenkins",
    src: "/assets/jenkins.svg",
  },
  {
    uuid: "666aa4d0-9821-46e8-898b-1989bc7e9602",
    name: "AWS",
    src: "/assets/aws.svg",
  },
];
