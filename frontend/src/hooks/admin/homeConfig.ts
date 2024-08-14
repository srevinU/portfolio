import { AdminForm } from "../../utils/entities/AdminForm";
import { HomeConfigHooksI } from "../../utils/interfaces/hooks";

export const useHomeConfigHooks = ({
  adminFormContent,
  setAdminFormContent,
}: {
  adminFormContent: AdminForm;
  setAdminFormContent: React.Dispatch<React.SetStateAction<AdminForm>>;
}): HomeConfigHooksI => {
  const handleHomeDataChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    language: "EN" | "FR",
  ): void => {
    const { name, value } = e.target;
    const updatedContent = {
      ...adminFormContent,
      home: {
        ...adminFormContent.home,
        [language]: {
          ...adminFormContent.home[language as "EN" | "FR"],
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
