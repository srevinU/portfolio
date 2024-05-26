export type SliderProjectsT = Array<ProjectT>;

export type ProjectT = {
  key: string;
  index: number;
  headline: string;
  link: linkT;
  src: string;
  technos: Array<TechnoT>;
};

type linkT = {
  label: string;
  href: string;
};

export type TechnoT = {
  key: string;
  index: number;
  name: string;
  src: string;
};
