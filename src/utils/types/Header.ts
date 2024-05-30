import { MutableRefObject } from "react";

export type ReferencesT = {
  [key in "home" | "projects" | "about" | "contact"]: {
    FR: { name: string };
    EN: { name: string };
    ref: MutableRefObject<null>;
  };
};

export type SocialNetworkT = Array<{
  href: string;
  logo: string;
  alt: string;
  key: string;
}>;
