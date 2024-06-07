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

export const GetHeaderMenuActive = (
  scrollTop: number | undefined,
  references: ReferencesT,
): string | null => {
  if (scrollTop) {
    type DivPositionT = {
      [key: string]: {
        offsetTop: number | undefined;
        offsetHeight: number | undefined;
      };
    };

    const divPosition: DivPositionT = {
      home: {
        offsetTop: references.home.ref.current?.offsetTop,
        offsetHeight: references.projects.ref.current?.offsetHeight,
      },
      projects: {
        offsetTop: references.projects.ref.current?.offsetTop,
        offsetHeight: references.projects.ref.current?.offsetHeight,
      },
      about: {
        offsetTop: references.about.ref.current?.offsetTop,
        offsetHeight: references.about.ref.current?.offsetHeight,
      },
      contact: {
        offsetTop: references.contact.ref.current?.offsetTop,
        offsetHeight: references.contact.ref.current?.offsetHeight,
      },
    };

    for (const menu in divPosition) {
      if (
        scrollTop &&
        scrollTop >= divPosition[menu]!.offsetTop! &&
        scrollTop <
          divPosition[menu]!.offsetTop! + divPosition[menu]!.offsetHeight!
      ) {
        return menu;
      }
    }
  }
  return null;
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
