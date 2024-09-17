export type SliderProjectsT = Array<ProjectT>;

export type ProjectT = {
  _id: string;
  src: string;
  technos: Array<string>;
  href: string;
  FR: { label_link: string; title: string };
  EN: { label_link: string; title: string };
  status?: string;
};

export type TechnoT = {
  _id: string;
  name: string;
  src: string;
  active?: boolean;
};
