export type AboutContentsT = {
  EN: AboutContentT;
  FR: AboutContentT;
};

export type AboutContentT = {
  details: {
    title: string;
    description: string;
  };
  experiences: {
    title: string;
    jobs: Array<{
      title: string;
      company: string;
      duration: string;
      responsibilities: string;
    }>;
  };
  disciplines: {
    title: string;
    list: Array<string>;
  };
  technologies: {
    title: string;
    list: Array<string>;
  };
  languages: {
    title: string;
    list: Array<string>;
  };
};

export type DevLanguageT = {
  uuid: string;
  name: string;
  src: string;
  active?: boolean;
};
