import { ChangeEventHandler, useState } from "react";
import { devLanguages } from "../../utils/data/aboutContent";
import { TechnoT } from "../../utils/types/SliderProjects";
import { DevLanguageT } from "../../utils/types/AboutContent";
import { sliderTechnos } from "../../utils/data/sliderProjects";
import { AboutForm } from "../../entities/AboutForm";

interface AboutConfigHooksI {
  handleOnChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  technos: TechnoT[];
  languages: DevLanguageT[];
  handleLabelClicked: Function;
}

const useAboutConfigHooks = (
  setAboutContent: Function,
  aboutContent: AboutForm,
): AboutConfigHooksI => {
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setAboutContent({ ...aboutContent, [e.target.name]: e.target.value });
  };

  const [technos, setTechnos] = useState<TechnoT[]>(
    sliderTechnos.map((techno) => {
      return { ...techno, active: aboutContent.technos.includes(techno.uuid) };
    }),
  );

  const [languages, setLanguages] = useState<DevLanguageT[]>(
    devLanguages.map((language) => {
      return {
        ...language,
        active: aboutContent.languages.includes(language.name),
      };
    }),
  );

  const handleLabelClicked = (
    record: TechnoT | DevLanguageT,
    type: "technos" | "languages",
  ): void => {
    record.active = !record.active;
    if (record.active) {
      aboutContent[type].push(record.uuid);
    } else {
      aboutContent[type] = aboutContent[type].filter(
        (t: string) => t !== record.uuid,
      );
    }
    if (type === "technos") {
      setTechnos(
        technos.map((techno) => {
          if (techno.uuid === record.uuid) {
            return { ...techno, active: record.active };
          }
          return techno;
        }),
      );
    } else {
      setLanguages(
        languages.map((language) => {
          if (language.uuid === record.uuid) {
            return { ...language, active: record.active };
          }
          return language;
        }),
      );
    }
  };

  return {
    handleOnChange,
    technos,
    languages,
    handleLabelClicked,
  };
};

export default useAboutConfigHooks;
