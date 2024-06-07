import { useRef } from "react";
import { ReferencesT, SocialNetworkT } from "../types/Header";

export const GetHeaderReferences = (): ReferencesT => {
  return {
    home: { FR: { name: "acceuil" }, EN: { name: "home" }, ref: useRef(null) },
    projects: {
      FR: { name: "projets" },
      EN: { name: "projects" },
      ref: useRef(null),
    },
    about: {
      FR: { name: "à propos" },
      EN: { name: "about" },
      ref: useRef(null),
    },
    contact: {
      FR: { name: "contact" },
      EN: { name: "contact" },
      ref: useRef(null),
    },
  };
};

export const SolcialNetwork: SocialNetworkT = [
  {
    href: "https://github.com/srevinU",
    logo: "/assets/logos/github.svg",
    alt: "github",
    key: "0",
  },
  {
    href: "https://www.linkedin.com/in/cedric-segura-a240589b/",
    logo: "/assets/logos/linkedin.svg",
    alt: "linkefin",
    key: "1",
  },
];
