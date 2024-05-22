type HeaderMenu = Array<HeaderMenuItem>;

type HeaderMenuItem = {
  label: string;
  key: string;
  ref: string;
};

const headerMenu: HeaderMenu = [
  {
    label: "Home",
    key: "home",
    ref: "/",
  },
  {
    label: "Projects",
    key: "projects",
    ref: "/projects",
  },
  {
    label: "About",
    key: "about",
    ref: "/about",
  },
];

export default headerMenu;
