export type SliderProjectsT = Array<ProjectT>;

export type ProjectT = {
  key: string;
  index: number;
  dataTestId: string;
  src: string;
  technos: Array<TechnoT>;
  href: string;
  FR: { label_link: string; title: string };
  EN: { label_link: string; title: string };
};

export type TechnoT = {
  key: string;
  dataTestId: string;
  index: number;
  name: string;
  src: string;
};
