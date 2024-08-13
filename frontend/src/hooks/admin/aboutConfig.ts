import { AboutConfigHooksI } from "../../utils/interfaces/hooks";
import { AdminForm } from "../../entities/AdminForm";
import { Techno } from "../../entities/Techno";
import { DevLanguage } from "../../entities/DevLangague";

const useAboutConfigHooks = ({
  adminFormContent,
  setAdminFormContent,
}: {
  adminFormContent: AdminForm;
  setAdminFormContent: Function;
}): AboutConfigHooksI => {
  const handleAboutDataOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setAdminFormContent({
      ...adminFormContent,
      about: { ...adminFormContent.about, [e.target.name]: e.target.value },
    });
  };

  const handleAboutTechnoClicked = (
    technoClicked: Techno,
    technosReferencial: Array<Techno>,
    setTechnosReferencial: React.Dispatch<React.SetStateAction<Array<Techno>>>,
  ): void => {
    technoClicked.active = !technoClicked.active;
    if (technoClicked.active) {
      adminFormContent.about.technos.push(technoClicked.uuid);
    } else {
      adminFormContent.about.technos = adminFormContent.about.technos.filter(
        (technoId: string) => technoId !== technoClicked.uuid,
      );
    }
    setTechnosReferencial(
      technosReferencial.map((techno) => {
        if (techno.uuid === technoClicked.uuid) {
          return { ...techno, active: technoClicked.active };
        }
        return techno;
      }),
    );
    setAdminFormContent(adminFormContent);
  };

  const handleAboutDevLanguageClicked = (
    DevLanguageClicked: DevLanguage,
    devLanguageReferencial: Array<DevLanguage>,
    setDevLanguageReferencial: React.Dispatch<
      React.SetStateAction<Array<DevLanguage>>
    >,
  ): void => {
    DevLanguageClicked.active = !DevLanguageClicked.active;
    if (DevLanguageClicked.active) {
      adminFormContent.about.languages.push(DevLanguageClicked.uuid);
    } else {
      adminFormContent.about.languages =
        adminFormContent.about.languages.filter(
          (languageId: string) => languageId !== DevLanguageClicked.uuid,
        );
    }
    setDevLanguageReferencial(
      devLanguageReferencial.map((language) => {
        if (language.uuid === DevLanguageClicked.uuid) {
          return { ...language, active: DevLanguageClicked.active };
        }
        return language;
      }),
    );
    setAdminFormContent(adminFormContent);
  };

  return {
    handleAboutDataOnChange,
    handleAboutTechnoClicked,
    handleAboutDevLanguageClicked,
  };
};

export default useAboutConfigHooks;
