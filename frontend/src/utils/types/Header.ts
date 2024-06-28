import Reference from "../tools/Reference";

export type ReferencesT = {
  [key: string]: Reference;
};

export type SocialNetworksT = Array<SocialNetworkT>;

export type SocialNetworkT = {
  href: string;
  logo: string;
  alt: string;
  key: string;
  dataTestId: string;
};
