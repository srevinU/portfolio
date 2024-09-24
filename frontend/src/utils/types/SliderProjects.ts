export type SliderProjectsT = Array<ProjectT>;

export type ProjectT = {
  uuid: string;
  src: string;
  technos: Array<string>;
  href: string;
  FR: { label_link: string; title: string };
  EN: { label_link: string; title: string };
  status?: string;
};

export type TechnoT = {
  uuid: string;
  name: string;
  src: string;
  active?: boolean;
};
