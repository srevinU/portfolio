import { RefObject } from "react";

export type ReferencesT = {
  [key: string]: ReferenceT;
};

type ReferenceT = {
  FR: { name: string };
  EN: { name: string };
  ref: RefObject<HTMLDivElement>;
};

export type SocialNetworkT = Array<{
  href: string;
  logo: string;
  alt: string;
  key: string;
}>;
