import { sliderTechnos } from "../../utils/data/sliderProjects";
import { devLanguages } from "../../utils/data/aboutContent";
import { ReferencialsHooksI } from "../../utils/interfaces/hooks";
import { Discipline, disciplineData } from "../../utils/entities/Discipline";
import { Techno } from "../../utils/entities/Techno";
import { DevLanguage } from "../../utils/entities/DevLangague";

export const useReferencialsHooks = (): ReferencialsHooksI => {
  // Will be fetch from the backend (Techno referenciel)
  const technosRef: Array<Techno> = sliderTechnos;
  // Will be fetch from the backend (DevLanguage referenciel)
  const devLanguageRef: Array<DevLanguage> = devLanguages;
  // Will be fetch from the backend (Discipline referenciel)
  const disciplinesRef: Array<Discipline> = disciplineData;
  return {
    technosRef,
    devLanguageRef,
    disciplinesRef,
  };
};
