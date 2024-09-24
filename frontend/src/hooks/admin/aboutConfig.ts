import { AboutConfigHooksI } from "../../utils/interfaces/hooks";
import { AdminForm } from "../../utils/entities/AdminForm";
import { Techno } from "../../utils/entities/Techno";
import { DevLanguage } from "../../utils/entities/DevLangague";
import { LanguageT } from "../../utils/types/general";

const useAboutConfigHooks = ({
  adminFormContent,
  setAdminFormContent,
}: {
  adminFormContent: AdminForm;
  setAdminFormContent: Function;
}): AboutConfigHooksI => {
  const handleAboutDataOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    language: LanguageT,
  ): void => {
    const { name, value } = event.target;
    const updatedContent = {
      ...adminFormContent,
      about: {
        ...adminFormContent.about,
        [language]: {
          ...adminFormContent.about[language],
          [name]: value,
        },
      },
    };
    setAdminFormContent(updatedContent);
  };

  const handleAboutTechnoClicked = (technoClicked: Techno): void => {
    if (adminFormContent.about.technos.includes(technoClicked.uuid)) {
      adminFormContent.about.technos = adminFormContent.about.technos.filter(
        (technoId: string) => technoId !== technoClicked.uuid,
      );
    } else {
      adminFormContent.about.technos.push(technoClicked.uuid);
    }
    setAdminFormContent({ ...adminFormContent });
  };

  const handleAboutDevLanguageClicked = (
    devLanguageClicked: DevLanguage,
  ): void => {
    if (adminFormContent.about.languages.includes(devLanguageClicked.uuid)) {
      adminFormContent.about.languages =
        adminFormContent.about.languages.filter(
          (languageId: string) => languageId !== devLanguageClicked.uuid,
        );
    } else {
      adminFormContent.about.languages.push(devLanguageClicked.uuid);
    }
    setAdminFormContent({ ...adminFormContent });
  };

  const handleDisciplinesSelected = (disciplines: Array<string>) => {
    setAdminFormContent({
      ...adminFormContent,
      about: {
        ...adminFormContent.about,
        disciplines: disciplines,
      },
    });
  };

  return {
    handleAboutDataOnChange,
    handleAboutTechnoClicked,
    handleAboutDevLanguageClicked,
    handleDisciplinesSelected,
  };
};

export default useAboutConfigHooks;
