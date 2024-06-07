import Reference from "../tools/Reference";

export type ReferencesT = {
  [key: string]: Reference;
};

export type SocialNetworkT = Array<{
  href: string;
  logo: string;
  alt: string;
  key: string;
}>;
