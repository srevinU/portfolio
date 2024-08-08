import { useRef } from "react";
import { SocialNetworksT } from "../types/Header";
import Reference from "../tools/Reference";

export const GetHeaderReferences = (): Array<Reference> => {
  return [
    new Reference({ FR: "acceuil", EN: "home" }, useRef(null)),
    new Reference({ FR: "projets", EN: "projects" }, useRef(null)),
    new Reference({ FR: "à propos", EN: "about" }, useRef(null)),
    new Reference({ FR: "contact", EN: "contact" }, useRef(null)),
  ];
};

export const GetHeaderMenuActive = (
  scrollTop: number | undefined,
  references: Array<Reference>,
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
  return references[0];
};

export const socialNetworks: SocialNetworksT = [
  {
    uuid: "799583bf-891d-44dd-a5aa-92306e1add8a",
    href: "https://github.com/srevinU",
    logo: "/assets/github.svg",
    alt: "github",
  },
  {
    uuid: "fc8e37a0-e614-4fe6-be5a-3a83ce095dec",
    href: "https://www.linkedin.com/in/cedric-segura-a240589b/",
    logo: "/assets/linkedin.svg",
    alt: "linkefin",
  },
];
