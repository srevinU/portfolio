import { AdminForm } from "../../utils/entities/AdminForm";
import { HomeConfigHooksI } from "../../utils/interfaces/hooks";
import { LanguageT } from "../../utils/types/general";

export const useHomeConfigHooks = ({
  adminFormContent,
  setAdminFormContent,
}: {
  adminFormContent: AdminForm;
  setAdminFormContent: React.Dispatch<React.SetStateAction<AdminForm>>;
}): HomeConfigHooksI => {
  const handleHomeDataChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    language: LanguageT,
  ): void => {
    const { name, value } = e.target;
    const updatedContent = {
      ...adminFormContent,
      home: {
        ...adminFormContent.home,
        [language]: {
          ...adminFormContent.home[language as LanguageT],
          [name]: value,
        },
      },
    };
    setAdminFormContent(updatedContent);
  };

  return {
    handleHomeDataChange,
  };
};
