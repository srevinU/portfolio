type SliderProjects = Array<Project>;

type Project = {
  key: string;
  index: number;
  headline: string;
  button: Button;
  src: string;
};

type Button = {
  label: string;
  href: string;
};

const sliderProjects: SliderProjects = [
  {
    key: "1",
    index: 0,
    headline: "Project 1",
    button: { label: "View Project", href: "/projects_1" },
    src: "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    key: "2",
    index: 1,
    headline: "Project 2",
    button: { label: "View Project", href: "/projects_2" },
    src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    key: "3",
    index: 2,
    headline: "Project 3",
    button: { label: "View Project", href: "/project_3" },
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
  },
];

export default sliderProjects;
