import { AdminForm } from "../../entities/AdminForm";

const useHomeConfigHooks = ({
  adminFormContent,
  setAdminFormContent,
}: {
  adminFormContent: AdminForm;
  setAdminFormContent: React.Dispatch<React.SetStateAction<AdminForm>>;
}) => {
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

export default useHomeConfigHooks;
