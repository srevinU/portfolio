import { ReferencialsHooksI } from "../../utils/interfaces/hooks";
import { Discipline, disciplineData } from "../../utils/entities/Discipline";
import { Techno } from "../../utils/entities/Techno";
import { DevLanguage } from "../../utils/entities/DevLangague";
import Referentials from "../../webServices/Referentials";
import { useEffect, useState } from "react";

export const useReferencialsHooks = (): ReferencialsHooksI => {
  const [technosRef, setTechnosRef] = useState<Array<Techno>>([]);
  const [devLanguageRef, setDevLanguageRef] = useState<Array<DevLanguage>>([]);
  const [disciplinesRef, setDisciplinesRef] =
    useState<Array<Discipline>>(disciplineData);

  const getReferentials = async () => {
    const technosReferentials = await Referentials.getAllTechnos();
    const languagesReferentials = await Referentials.getAllLanguages();
    setTechnosRef(technosReferentials);
    setDevLanguageRef(languagesReferentials);
    // setDisciplinesRef(disciplineData);
  };

  useEffect(() => {
    getReferentials();
  }, []);

  return {
    technosRef,
    devLanguageRef,
    disciplinesRef,
  };
};
