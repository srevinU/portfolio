import { useRef } from "react";
import { ReferencesT, SocialNetworksT } from "../types/Header";
import Reference from "../tools/Reference";

export const GetHeaderReferences = (): ReferencesT => {
  return {
    home: new Reference("1", { FR: "acceuil", EN: "home" }, useRef(null)),
    projects: new Reference(
      "2",
      { FR: "projets", EN: "projects" },
      useRef(null),
    ),
    about: new Reference("3", { FR: "à propos", EN: "about" }, useRef(null)),
    contact: new Reference("4", { FR: "contact", EN: "contact" }, useRef(null)),
  };
};

export const GetHeaderMenuActive = (
  scrollTop: number | undefined,
  references: ReferencesT,
): Reference => {
  if (scrollTop) {
    for (const reference in references) {
      references[reference]!.setOffsets();
      if (
        scrollTop >= references[reference]!.offsetTop! &&
        scrollTop <
          references[reference]!.offsetTop! +
            references[reference]!.offsetHeight!
      ) {
        return references[reference];
      }
    }
  }
  return references.home;
};

export const socialNetworks: SocialNetworksT = [
  {
    href: "https://github.com/srevinU",
    logo: "/assets/github.svg",
    alt: "github",
    key: "0",
    dataTestId: "github",
  },
  {
    href: "https://www.linkedin.com/in/cedric-segura-a240589b/",
    logo: "/assets/linkedin.svg",
    alt: "linkefin",
    key: "1",
    dataTestId: "linkedin",
  },
];
