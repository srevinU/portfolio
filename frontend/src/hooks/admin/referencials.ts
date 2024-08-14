import { useState } from "react";
import { DevLanguage } from "../../utils/entities/DevLangague";
import { Techno } from "../../utils/entities/Techno";
import { sliderTechnos } from "../../utils/data/sliderProjects";
import { AboutForm } from "../../utils/entities/AboutForm";
import { devLanguages } from "../../utils/data/aboutContent";
import { ReferencialsHooksI } from "../../utils/interfaces/hooks";

export const useReferencialsHooks = (
  aboutContent: AboutForm,
): ReferencialsHooksI => {
  // Will be fetch from the backend (Techno referenciel)
  const getTechnosReferecials = () =>
    sliderTechnos.map((techno: Techno) => {
      if (aboutContent.technos.includes(techno.uuid)) {
        techno.active = true;
      } else {
        techno.active = false;
      }
      return techno;
    });
  // Will be fetch from the backend (DevLanguage referenciel)
  const getDevLanguageReferecials = () =>
    devLanguages.map((language: DevLanguage) => {
      if (aboutContent.languages.includes(language.name)) {
        language.active = true;
      } else {
        language.active = false;
      }
      return language;
    });

  const [technosRef, setTechnosRef] = useState<Array<Techno>>(
    getTechnosReferecials(),
  );
  const [devLanguageRef, setDevLanguageRef] = useState<Array<DevLanguage>>(
    getDevLanguageReferecials(),
  );
  return {
    technosRef,
    setTechnosRef,
    devLanguageRef,
    setDevLanguageRef,
  };
};
