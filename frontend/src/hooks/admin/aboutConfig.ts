import { AboutConfigHooksI } from "../../utils/interfaces/hooks";
import { AdminForm } from "../../utils/entities/AdminForm";
import { Techno } from "../../utils/entities/Techno";
import { DevLanguage } from "../../utils/entities/DevLangague";
import { LanguageT } from "../../utils/types/general";
import { isActive } from "../../utils/tools/funtions";

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
    if (isActive(technoClicked._id, adminFormContent.about.technos)) {
      adminFormContent.about.technos = adminFormContent.about.technos.filter(
        (techno: any) => techno._id !== technoClicked._id,
      );
    } else {
      adminFormContent.about.technos.push(technoClicked as any);
    }
    setAdminFormContent({ ...adminFormContent });
  };

  const handleAboutDevLanguageClicked = (
    devLanguageClicked: DevLanguage,
  ): void => {
    if (isActive(devLanguageClicked._id, adminFormContent.about.languages)) {
      adminFormContent.about.languages =
        adminFormContent.about.languages.filter(
          (languageId: string) => languageId !== devLanguageClicked._id,
        );
    } else {
      adminFormContent.about.languages.push(devLanguageClicked as any);
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
