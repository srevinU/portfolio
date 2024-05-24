type SliderProjects = Array<Project>;

type Project = {
  key: string;
  index: number;
  headline: string;
  button: Button;
  src: string;
  technos: Array<Techno>;
};

type Button = {
  label: string;
  href: string;
};

export type Techno = {
  key: string;
  index: number;
  name: string;
  src: string;
};

export const sliderProjects: SliderProjects = [
  {
    key: "1",
    index: 0,
    headline: "Project 1",
    button: { label: "View Project", href: "/projects_1" },
    src: "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    technos: [
      { key: "1", index: 0, name: "React", src: "/assets/logos/react-2.svg" },
      {
        key: "2",
        index: 1,
        name: "Node.js",
        src: "/assets/logos/nodejs-1.svg",
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
    headline: "Project 2",
    button: { label: "View Project", href: "/projects_2" },
    src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    technos: [
      {
        key: "4",
        index: 0,
        name: "Vue.js",
        src: "/assets/logos/Vue.js_Logo_2.svg",
      },
      {
        key: "5",
        index: 1,
        name: "Node.js",
        src: "/assets/logos/nodejs-1.svg",
      },
    ],
  },
  {
    key: "6",
    index: 2,
    headline: "Project 3",
    button: { label: "View Project", href: "/project_3" },
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
    technos: [
      { key: "6", index: 0, name: "React", src: "/assets/logos/react-2.svg" },
      {
        key: "7",
        index: 1,
        name: "Node.js",
        src: "/assets/logos/nodejs-1.svg",
      },
      {
        key: "8",
        index: 2,
        name: "TypeScript",
        src: "/assets/logos/typescript.svg",
      },
      {
        key: "9",
        index: 2,
        name: "TypeScript",
        src: "/assets/logos/docker-3.svg",
      },
    ],
  },
];
