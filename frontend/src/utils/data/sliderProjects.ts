import { Project } from "../entities/Project";

export const sliderProjects: Array<Project> = [
  {
    _id: "66c8af236a046a108e33a2a5",
    src: "assets/temporary1.png",
    technos: [
      "67091157d2fede7af1e2c723",
      "67091175d2fede7af1e2c724",
      "67091185d2fede7af1e2c725",
      "670911a7d2fede7af1e2c727",
      "670911c9d2fede7af1e2c72a",
    ],
    href: "/maintenance",
    FR: {
      label_link: "Voir projet",
      title: "Maps app (En cours)",
    },
    EN: {
      label_link: "See project",
      title: "Maps app (On going)",
    },
    status: "inactive",
  },
  {
    _id: "66c8af236a046a108e33a2b5",
    src: "assets/platform.png",
    technos: [
      "67091175d2fede7af1e2c724",
      "67091185d2fede7af1e2c725",
      "670911a7d2fede7af1e2c727",
      "670911c9d2fede7af1e2c72a",
      "67091194d2fede7af1e2c726",
    ],
    href: "https://game-platform.cedricsegura.dev/",
    FR: {
      label_link: "Voir projet",
      title: "Game platform",
    },
    EN: {
      label_link: "See project",
      title: "Game platform",
    },
    status: "inactive",
  },
];
