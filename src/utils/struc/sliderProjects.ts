type SliderProjects = Array<Project>;

type Project = {
  key: string;
  index: number;
  headline: string;
  link: link;
  src: string;
  technos: Array<Techno>;
};

type link = {
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
    headline: "Netflix Clone",
    link: { label: "View Project", href: "/projects_1" },
    src: "/assets/projects/netflix.png",
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
    headline: "Amazon Clone",
    link: { label: "View Project", href: "/projects_2" },
    src: "/assets/projects/amazon.png",
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
];
