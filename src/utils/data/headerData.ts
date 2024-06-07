import { useRef } from "react";
import { ReferencesT, SocialNetworkT } from "../types/Header";
import Reference from "../tools/Reference";
import { LanguagesT } from "../types/general";

export const GetHeaderReferences = (): ReferencesT => {
  return {
    home: new Reference({ FR: "acceuil", EN: "home" }, useRef(null)),
    projects: new Reference({ FR: "projets", EN: "projects" }, useRef(null)),
    about: new Reference({ FR: "à propos", EN: "about" }, useRef(null)),
    contact: new Reference({ FR: "contact", EN: "contact" }, useRef(null)),
  };
};

export const GetHeaderMenuActive = (
  scrollTop: number | undefined,
  references: ReferencesT,
): LanguagesT | null => {
  if (scrollTop) {
    for (const reference in references) {
      references[reference]!.setOffsets();
      if (
        scrollTop >= references[reference]!.offsetTop! &&
        scrollTop <
          references[reference]!.offsetTop! +
            references[reference]!.offsetHeight!
      ) {
        return references[reference].name;
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
